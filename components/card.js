import { html, scss, when } from '../index.js'

export const card = (children) =>
	html`<div class="card surface">${children.join('')}</div>`

export const cardBody = ({ title, subtitle, copy }) =>
	html`
		<div class="body">
			${when(title, html`<h3>${title}</h3>`)}
			${when(subtitle, html`<h4>${subtitle}</h4>`)}
			${when(copy, html`<p>${copy}</p>`)}
		</div>
	`

export const cardActions = (children) =>
	html`<div class="actions">${children.join('')}</div>`

card.style = scss`
	.card {
		> img {
			width: 100%;
		}
		
		> .body {
			padding: 1rem;

			> * {
				margin: 0;
			}

			> h3 {
				margin-bottom: 1em;
			}

			> h4 {
				margin-bottom: 0.5em;
			}

			> p {
				font-size: 14px;
				opacity: 0.8;
			}
		}

		> .actions {
			&:has(.ghost)	{
				padding: 0.25rem;

				&:has(.sm) {
					padding: 0.5rem 0.5rem;
				}
			}
		}
	}
`
