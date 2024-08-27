#!/usr/bin/env node
import { build } from './bin/build.mjs'
import { component } from './bin/component.mjs'
import { dev } from './bin/dev.mjs'
import { init } from './bin/init.mjs'
import { page } from './bin/page.mjs'

const args = process.argv.slice(2)

if (args[0] === 'init') init()
if (args[0] === 'build') build()
if (args[0] === 'dev') dev()
if (args[0] === 'page') {
	if (args.length === 2 && args[1]) {
		page(args[1])
	} else {
		console.log('Usage: cuirk page <path>')
	}
}
if (args[0] === 'component') {
	if (args.length === 2 && args[1]) {
		component(args[1])
	} else {
		console.log('Usage: cuirk component <path>')
	}
}
