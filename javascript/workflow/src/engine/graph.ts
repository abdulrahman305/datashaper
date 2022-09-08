/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { Workflow as WorkflowInput } from '@datashaper/schema'
import type { TableContainer } from '@datashaper/tables'

import { GraphManager } from './GraphManager.js'

/**
 * This function establishes the reactive processing graph for executing transformation steps.
 *
 * A graph is constructed using each step definition as a node. Any table definitions they export
 * are registered into the tableContainer. Any inputs that are defined but not accounted for in the
 * graph will be wired to the TableContainer using the observable pattern.
 *
 * @param steps - The processing steps
 * @param tables - The fixed table map
 * @returns The built reactive processing graph
 */
export function createGraph(
	workflow: WorkflowInput,
	tables: Map<string, TableContainer>,
): GraphManager {
	const graph = new GraphManager(workflow)
	graph.setInputs(tables)
	return graph
}
