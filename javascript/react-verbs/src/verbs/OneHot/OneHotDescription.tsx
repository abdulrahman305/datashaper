/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { OneHotStep } from '@data-wrangling-components/core'
import { memo, useMemo } from 'react'

import { VerbDescription } from '../../common/VerbDescription.js'
import type { StepDescriptionProps } from '../../types.js'

export const OneHotDescription: React.FC<StepDescriptionProps> = memo(
	function OneHotDescription(props) {
		const rows = useMemo(() => {
			const internal = props.step as OneHotStep
			const { args } = internal
			return [
				{
					before: 'column',
					value: args.column,
				},
				{
					before: 'with prefix',
					value: args.prefix,
				},
			]
		}, [props])
		return <VerbDescription {...props} rows={rows} />
	},
)