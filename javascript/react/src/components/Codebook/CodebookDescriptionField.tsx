/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { TextField } from '@fluentui/react'
import { memo, useCallback } from 'react'

import type { CodebookTextFieldProps } from './Codebook.types.js'

export const CodebookDescriptionField: React.FC<CodebookTextFieldProps> = memo(
	function CodebookDescriptionField(props) {
		const { styles, field, onChangeField, onChange } = props

		const onChangeValue = useCallback(
			(
				_ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
				description?: string,
			) => {
				onChangeField?.({ ...field, description })
				onChange?.(_ev, description)
			},
			[onChangeField, onChange, field],
		)

		return (
			<TextField
				multiline
				styles={styles}
				disabled={field.exclude}
				name="displayName"
				value={field.description}
				onChange={onChangeValue}
				rows={3}
				resizable={false}
				{...props}
			/>
		)
	},
)