/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import { default as quantile } from 'compute-quantile'

/*
 */
export function autoStrategy(values: number[], roundBin: boolean) {
	const sturgesResult = sturgesStrategy(values)
	const fdResult = fdStrategy(values)

	return Math.max(sturgesResult, fdResult)
}

/*
 */
export function fdStrategy(values: number[]): number {
	const iqrResult = iqr(values)
	return (2 * iqrResult) / Math.pow(values.length, 1 / 3)
}

/*
 */
export function doaneStrategy(values: number[]): number {
	const N = values.length
	let sum = 0

	values.forEach(val => {
		sum = sum + val !== undefined ? val : 0
	})

	const sumThird = Math.pow(sum, 3)
	const sumSqrt = Math.pow(sum, 2)

	const squareB = sumThird / Math.pow(sumSqrt, 3 / 2)
	const oSquareB = Math.sqrt((6 * (N - 2)) / ((N + 1) * (N + 3)))

	const width = Math.log2(N) + 1 + Math.log2(1 + squareB / oSquareB)

	return width
}

/*
 */
export function scottStrategy(values: number[]) {
	return 3.49 * standardDeviation(values) * Math.pow(values.length, -1 / 3)
}

/*
 */
export function stoneStrategy(values: number[]): number {
	return values.length
}

/*
 */
export function riceStrategy(values: number[]) {
	return 2 * Math.cbrt(values.length)
}

/*
 */
export function sturgesStrategy(values: number[]) {
	const [min = -1, max = -1] = getBoundaries(values)
	const R = max - min
	const width = R / (1 + 3.322 * Math.log10(values.length))
	return width
}

/*
 */
export function sqrtStrategy(values: number[]): number {
	return Math.sqrt(values.length)
}

/*
 */
export function getBoundaries(values: number[]) {
	if (values.length > 0) {
		let [min, max] = [values[0], values[0]]

		if (min !== undefined && max !== undefined) {
			values.forEach((value: number) => {
				if (value !== undefined && min !== undefined && min > value) min = value

				if (value !== undefined && max !== undefined && max < value) max = value
			})
		}

		return [min, max]
	}

	return [-1, -1]
}

/*
 */
function ascending(a: number, b: number) {
	return a - b
}

export function standardDeviation(values: number[], precision = 3) {
	const N = values.length
	let sum = 0
	let squareNumbersSum = 0

	values.forEach(val => {
		sum = sum + val !== undefined ? val : 0
		squareNumbersSum = squareNumbersSum + val !== undefined ? val * val : 0
	})

	const variance = (squareNumbersSum - (sum * sum) / N) / (N - 1)

	const standarDeviationResult = Math.sqrt(variance)

	return Number.parseFloat(standarDeviationResult.toFixed(precision))
}

/*
 */
export function iqr(values: number[], opts?: IQROptions) {
	if (!Array.isArray(values)) {
		throw new TypeError('iqr()::invalid input argument. Must provide an array.')
	}
	if (opts === undefined) {
		opts = {
			sorted: false,
		}
	}

	if (opts !== undefined && !opts.sorted) {
		values = values.slice()
		values.sort(ascending)
		opts.sorted = true
	}
	return quantile(values, 0.75, opts) - quantile(values, 0.25, opts)
}

export interface IQROptions {
	sorted: boolean
}
