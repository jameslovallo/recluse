import { html } from '../index.js'

export const textLink = ({ title, href, target = '_self', classList }) => {
	return html`
		<a
			href="${href}"
			target="${target}"
			${classList ? `class="${classList.join(' ')}"` : ''}
		>
			${title}
		</a>
	`
}
