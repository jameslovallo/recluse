// import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const init = () => {
	console.log(__dirname)
	const starterPath = __dirname.replace('bin', 'starters/basic')
	console.log(starterPath)
	// fs.cp('../starters/basic/package.json', '../../../package.json', (err) => {
	// 	err && console.error(err)
	// })
	// fs.cp(
	// 	'../starters/basic/pages',
	// 	'../../../pages',
	// 	{ recursive: true },
	// 	(err) => {
	// 		err && console.error(err)
	// 	}
	// )
	// fs.cp('../starters/basic/src', '../../../src', { recursive: true }, (err) => {
	// 	err && console.error(err)
	// })
}
