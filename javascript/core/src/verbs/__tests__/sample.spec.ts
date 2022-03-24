/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { sampleStep } from '../stepFunctions/simpleSteps.js'
import { TestStore } from './TestStore.js'

describe('test for sample verb', () => {
	let store: TestStore
	beforeEach(() => {
		store = new TestStore()
	})
	test('sample test with percentage', () => {
		const result = sampleStep(store.table('table6'), {
			proportion: 0.4,
		})

		expect(result.numCols()).toBe(3)
		expect(result.numRows()).toBe(2)
	})

	test('sample test with size', () => {
		const result = sampleStep(store.table('table6'), {
			size: 4,
		})

		expect(result.numCols()).toBe(3)
		expect(result.numRows()).toBe(4)
	})
})
