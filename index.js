import fs from 'fs'

export const html = (strings, ...values) => {
	let str = strings[0]
	for (let i = 0; i < values.length; i++) {
		str += values[i] + strings[i + 1]
	}
	return str.trim()
}

export const md = html

export const css = (s) => s

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

export const when = (condition, html) => (condition ? html : '<!-- -->')

export const componentStyles = (components) => `
	<style>
		${Object.values(components)
			.map((component) => component.style)
			.join('\n')}
	</style>
`

export const createTags = (data, type) =>
	data
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

export const embedCode = (file) =>
	[
		'```' + file.split('.').pop(),
		fs.readFileSync(file, 'utf-8').replaceAll('\t', '  '),
		'```',
	].join('\n')
