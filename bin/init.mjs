import fs from 'fs'

fs.cp('./starters/basic/package.json', '../../../package.json', (err) => {
	err && console.error(err)
})
fs.cp(
	'./starters/basic/pages',
	'../../../pages',
	{ recursive: true },
	(err) => {
		err && console.error(err)
	}
)
fs.cp('./starters/basic/src', '../../../src', { recursive: true }, (err) => {
	err && console.error(err)
})
