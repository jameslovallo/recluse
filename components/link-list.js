import { html, loop, scss, when } from '../index.js'
import { icon } from './icon.js'

const iconLink = ({ icon: path, title, description, href }) => html`
	<li>
		<a href="${href}">
			<span class="icon">${icon({ name: path })}</span>
			<span class="text">
				${when(title, html`<span>${title}</span>`)}
				${when(description, html`<small>${description}</small>`)}
			</span>
		</a>
	</li>
`

export const linkList = (links) => html`
	<ul class="link-list">
		${loop(links, iconLink)}
	</ul>
`

linkList.style = scss`
	.link-list {
		display: grid;
		gap: 1rem;
		list-style: none;
		margin: 0;
		padding: 0;
		
		a {
			align-items: center;
			border-radius: 5rem;
			color: inherit;
			display: flex;
			gap: 1rem;
			padding-right: 1rem;
			position: relative;
			text-decoration: none;
	
			&:hover {
				background: var(--c-primary-hover);
			}
	
			&:active {
				background: var(--c-primary-active);
			}
	
			> .icon {
				background: var(--c-primary);
				color: var(--c-primary-color);
				padding: 0.75rem;
				border-radius: 100%;
			}
	
			> .text {
				display: grid;
				gap: .33rem;
				line-height: 1;
	
				small {
					opacity: 0.66;
				}
			}
		}
	}
`
