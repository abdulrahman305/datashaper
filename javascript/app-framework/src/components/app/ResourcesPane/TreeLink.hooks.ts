/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { useBoolean } from '@fluentui/react-hooks'
import type React from 'react';
import { useCallback } from 'react'

export function useMenuShowState(): {
	isHidden: boolean
	onToggle: (e: React.MouseEvent<unknown>) => void
	onClose: () => void
} {
	const [isHidden, { toggle: toggleMenu, setTrue: onClose }] = useBoolean(true)

	const onToggle = useCallback(
		(e: React.MouseEvent<unknown>) => {
			toggleMenu()
			e.preventDefault()
		},
		[toggleMenu],
	)

	return {
		isHidden,
		onToggle,
		onClose,
	}
}
