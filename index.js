import fs from 'fs'
import { compileString } from 'sass'

export const html = (strings, ...values) => {
	let str = strings[0]
	for (let i = 0; i < values.length; i++) {
		str += values[i] + strings[i + 1]
	}
	return str.trim()
}

export const md = html

export const css = (s) => s
export const scss = (s) => s
export const sass = (s) => s

export const loop = (arr, template) => {
	if (typeof arr === 'number') {
		arr = [...Array(arr)]
	}
	return arr
		.map((el, index) => {
			if (typeof template === 'function') {
				return template({ ...el, index })
			} else return template
		})
		.join('')
}

export const renderChildren = (children) =>
	Array.isArray(children) ? children.join('') : children

export const when = (condition, html) => (condition ? html : '<!-- -->')

export const componentStyles = (components) => `
	<style>
		:root {
			--c-primary: #1e90ff;
			--c-primary-1: #1e90ff11;
			--c-primary-2: #1e90ff22;
			--c-primary-3: #1e90ff33;
			--c-primary-hover: var(--c-primary-2);
			--c-primary-active: var(--c-primary-3);
			--c-primary-color: white;
			--c-border: 1px solid #bbb;
			--c-surface: white;
			--c-surface-color: black;
		}
		
		:root,
		body {
			height: 100%;
		}
		
		body {
			margin: 0;
		}
		
		* {
			box-sizing: border-box;
		}
		
		img,
		video {
			display: block;
			max-width: 100%;
		}
		
		svg {
			display: block;
		}

		.surface {
			background: var(--c-surface);
			border: var(--c-border);
			color: var(--c-surface-color);
		}
		
		${
			compileString(
				Object.values(components)
					.map((component) => component.style)
					.join('\n')
			).css
		}
	</style>
`

export const componentScripts = (components) =>
	Object.values(components)
		.map((component) => {
			if (component.init) {
				const scriptArr = String(component.init).split('\n')
				scriptArr.shift() && scriptArr.pop()
				return `<script>${scriptArr.join('\n')}</script>`
			}
		})
		.join('\n')

export const createTags = (data, type) => {
	return !!data
		? data
				.map((tag) => {
					const attrs = Object.keys(tag)
						.map((key) => `${key}="${tag[key]}"`)
						.join(' ')
					if (type === 'script') {
						return `<script ${attrs}></script>`
					} else if (type === 'link') {
						return `<link ${attrs}>`
					}
				})
				.join('\n')
		: ''
}

export const embedCode = (file) =>
	[
		'```' + file.split('.').pop(),
		fs.readFileSync(file, 'utf-8').replaceAll('\t', '  '),
		'```',
	].join('\n')
