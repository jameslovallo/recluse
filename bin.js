#!/usr/bin/env node
import { productionBuild } from 'cuirk/build.mjs'
import { devServer } from 'cuirk/dev.mjs'

const args = process.argv.slice(2)

if (args[0] === 'build') productionBuild()
if (args[0] === 'dev') devServer()
