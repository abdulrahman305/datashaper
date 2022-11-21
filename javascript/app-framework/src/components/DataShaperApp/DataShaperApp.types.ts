/*!
 * Copyright (c) Microsoft. All rights reserved.
 * Licensed under the MIT license. See LICENSE file in the project.
 */
import type React from 'react'

import type { DataShaperAppPlugin } from '../../types.js'
import type { FileDefinition } from '../resources/index.js'

export interface DataShaperAppProps {
	/**
	 * CSS Classname
	 */
	className?: string

	/**
	 * Examples to provide
	 */
	examples?: FileDefinition[]

	/**
	 * The child node to render as the "Front Page" of the app.
	 * This is the default view when no resource is selected
	 */
	children: React.ReactNode

	/**
	 * Custom resource renderers
	 */
	plugins?: DataShaperAppPlugin[]
}
