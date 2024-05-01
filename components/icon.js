import * as icons from '@mdi/js'
import { html, scss } from '../index.js'

export const icon = ({ name, size = 24, color = 'currentColor' }) => html`
	<svg class="mdi" viewBox="0 0 24 24" width="${size}">
		<path d="${icons['mdi' + name]}" fill="${color}" />
	</svg>
`

icon.style = scss`
	.mdi {
		display: block;
	}
`
