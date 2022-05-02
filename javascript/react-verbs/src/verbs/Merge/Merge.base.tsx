/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type { MergeArgs } from '@data-wrangling-components/core'
import { MergeStrategy } from '@data-wrangling-components/core'
import { memo, useMemo } from 'react'

import type { FormInput } from '../../common/VerbForm.js'
import { FormInputType, VerbForm } from '../../common/VerbForm.js'
import {
	enumDropdown,
	inputColumnList,
} from '../../common/VerbFormFactories.js'
import type { StepComponentBaseProps } from '../../types.js'

/**
 * Just the to/value inputs for an impute.
 * Input table is expected to be edited elsewhere and configured as the step input.
 */
export const MergeBase: React.FC<
	StepComponentBaseProps<MergeArgs> & { columns: string[] }
> = memo(function MergeBase({ step, onChange, columns }) {
	const inputs = useMemo<FormInput<MergeArgs>[]>(
		() => [
			inputColumnList(step, columns),
			enumDropdown(
				'Merge strategy',
				MergeStrategy,
				step.args.strategy,
				(s, val) => (s.args.strategy = val as MergeStrategy),
			),
			{
				label: 'Delimiter',
				type: FormInputType.Text,
				if: step.args.strategy === MergeStrategy.Concat,
				current: step.args.delimiter,
				onChange: (s, val) => (s.args.delimiter = val as string),
			},
		],
		[step, columns],
	)

	return <VerbForm inputs={inputs} step={step} onChange={onChange} />
})
