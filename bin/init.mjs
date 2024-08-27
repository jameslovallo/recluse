import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cwd = process.cwd()

export const init = () => {
	const starterPath = __dirname.replace('bin', 'starters/basic')
	fs.cp(`${starterPath}/package.json`, `${cwd}/package.json`, (err) => {
		err && console.error(err)
	})
	fs.cp(`${starterPath}/pages`, `${cwd}/pages`, { recursive: true }, (err) => {
		err && console.error(err)
	})
	fs.cp(`${starterPath}/src`, `${cwd}/src`, { recursive: true }, (err) => {
		err && console.error(err)
	})
}
