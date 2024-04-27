#!/usr/bin/env node

import fs from 'fs'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import path from 'path'
import prism from 'prismjs'
import layout from '../../src/layouts/default.js'

const marked = new Marked(
	markedHighlight({
		langPrefix: 'language-',
		highlight(code, lang) {
			if (prism.languages[lang]) {
				return prism.highlight(code, prism.languages[lang], lang)
			} else {
				return code
			}
		},
	})
)

fs.rmSync('./dist', { recursive: true, force: true })
fs.mkdirSync('./dist')

const writePage = (filename) => {
	import('../../' + filename).then(({ meta, body }) => {
		const page = layout({
			meta,
			children: marked.parse(body),
		})
		if (filename === 'pages/home.js') {
			filename = 'pages'
		}
		const outDir = filename.replace('pages', 'dist').replace('.js', '')
		fs.mkdirSync(outDir, { recursive: true })
		fs.writeFileSync(outDir + '/index.html', page, {
			encoding: 'utf8',
		})
	})
}

const writePages = (startPath, filter) => {
	if (!fs.existsSync(startPath)) {
		console.log('directory does not exist: ', startPath)
		return
	}
	const files = fs.readdirSync(startPath)
	for (var i = 0; i < files.length; i++) {
		var filename = path.join(startPath, files[i])
		var stat = fs.lstatSync(filename)
		if (stat.isDirectory()) {
			buildHTML(filename, filter) //recurse
		} else if (filename.endsWith(filter)) {
			writePage(filename)
		}
	}
}

export const productionBuild = () => {
	writePages('./pages', '.js')

	fs.cp('./src', './dist/src', { recursive: true }, (err) => {
		err && console.error(err)
	})
}
