#!/usr/bin/env node

import { program } from 'commander'
import { productionBuild } from './build.mjs'
import { devServer } from './dev.mjs'

program
	.version('1.0.0')
	.description('My Node CLI')
	.option('-d, --dev', 'Dev Server')
	.option('-b, --build', 'Production Build')
	.action((options) => {
		console.log(options)
		if (options.dev) {
			devServer()
		}
		if (options.build) {
			productionBuild()
		}
	})

program.parse(process.argv)
