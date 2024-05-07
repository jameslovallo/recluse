import { html } from 'cuirk'

export const textLink = ({ title, href, target = '_self' }) =>
	html`<a href="${href}" target="${target}">${title}</a>`
