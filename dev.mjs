#!/usr/bin/env node

import watch from 'watch'

export const devServer = watch('./src', (event, filename) => {
	console.log('File changed:', filename)
	// Run your command here
})
