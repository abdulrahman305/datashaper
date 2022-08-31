/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { Step } from '@datashaper/workflow'

import type { TableTransformProps } from '../index.js'

export interface PanelProps {
	panelIsOpen: boolean
	onDismissPanel?: () => void
}

export interface StepHistoryPanelProps
	extends PanelProps,
		Pick<TableTransformProps, 'graph' | 'nextInputTable'> {
	steps: Step[]
	outputs: Array<string | undefined>
	buttonId?: string | undefined
	onDeleteClicked?: (index: number) => void
	onDuplicateClicked?: (step: Step) => void
	onSelect?: (name: string) => void
	onStartNewStep?: () => void
	onCreate?: (step: Step, output: string | undefined, index?: number) => void
}
