#!/usr/bin/env node

import { program } from 'commander'
import { productionBuild } from './build.mjs'

program
	.version('1.0.0')
	.description('My Node CLI')
	.option('-d, --dev', 'Dev Server')
	.option('-b, --build', 'Production Build')
	.action((options) => {
		if (options.dev) {
			console.log('Dev Server')
		}
		if (options.build) {
			productionBuild()
		}
	})

program.parse(process.argv)
