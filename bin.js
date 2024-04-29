#!/usr/bin/env node
import { build } from 'cuirk/build.mjs'
import { dev } from 'cuirk/dev.mjs'
import { page } from 'cuirk/page.mjs'

const args = process.argv.slice(2)

if (args[0] === 'build') build()
if (args[0] === 'dev') dev()
if (args[0] === 'page') {
	if (args.length === 2 && args[1]) {
		page(args[1])
	} else {
		console.log('Usage: cuirk page <path>')
	}
}
