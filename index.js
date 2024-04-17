export const html = (strings, ...values) => {
	let str = strings[0]
	for (let i = 0; i < values.length; i++) {
		str += values[i] + strings[i + 1]
	}
	return str.trim()
}

export const md = html

export const css = (s) => s

export const loop = (arr, template) => arr.map((el) => template(el)).join('')

export const when = (condition, html) => (condition ? html : '<!-- -->')

export const tags = (data, type) =>
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
