/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { TableMetadata } from '@datashaper/tables'
import type { Step, Workflow } from '@datashaper/workflow'

export interface StepComponentProps {
	/**
	 * The workflow instance
	 */
	workflow: Workflow

	/**
	 * The processing step
	 */
	step: Step

	/**
	 * TableMetadata
	 */
	metadata?: TableMetadata

	/**
	 * The step index
	 */
	index: number

	/**
	 * The output table name
	 */
	output?: string

	/**
	 * Label for the input-table dropdown
	 */
	inputTableLabel?: string

	/**
	 * Label for the input table dropdown
	 */
	inputColumnLabel?: string

	/**
	 * The label to use for the output column field
	 */
	outputColumnLabel?: string

	/**
	 * The label to use for the output field
	 */
	outputTableLabel?: string

	/**
	 * Whether the output table name is disabled
	 */
	outputTableDisabled?: boolean

	/**
	 * The step onchange handler
	 */
	onChange: (step: Step, index: number) => void

	/**
	 * Event handler for when the output table name changes
	 */
	onChangeOutput: (value: string | undefined) => void
	/**
	 * Indicates that the input table should be hidden or else shown and editable by the user.
	 * It may be desirable to hide this if the modal is launched directly from a table, which would make display redundant.
	 */
	hideInput?: boolean

	/**
	 * Indicates that the output table should be hidden or else shown and editable by the user.
	 * It may be desirable to hide this if the transform is expected to do an inline replacement of the input table.
	 */
	hideOutput?: boolean
	/**
	 * Indicates that the input column should be hidden or else shown and editable by the user.
	 * It may be desirable to hide this if the transform is expected to use the selected column when the modal is launched directly from a table.
	 */
	hideInputColumn?: boolean
}
