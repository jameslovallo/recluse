import fs from 'fs'

const pageTemplate = `import { md } from 'cuirk'

export const meta = {
	title: 'Page title',
	description: 'Page description',
}

export const body = md\`
# $\{meta.title}

Your content goes here.
\`
`

export const page = (path) => {
	const pageDirArr = path.split('/')
	pageDirArr.splice(-1, 1)
	const pageDir = pageDirArr.join('/')
	if (!fs.existsSync('./pages/' + pageDir)) {
		fs.mkdirSync('./pages/' + pageDir)
	}
	fs.writeFileSync(`./pages/${path}.js`, pageTemplate)
}
