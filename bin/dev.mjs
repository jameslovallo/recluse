#!/usr/bin/env node

import { execSync } from 'node:child_process'

export const dev = () => {
	console.log('Starting Dev Server')
	execSync(
		"browser-sync dist --watch & nodemon -e js,css,html --watch src --watch pages --exec 'npm run build'",
		{ stdio: 'inherit' }
	)
}
