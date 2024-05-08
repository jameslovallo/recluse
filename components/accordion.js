import { html, loop, scss } from '../index.js'
import { icon } from './icon.js'

const accordionItem = ({ title, children }) => html`
	<details class="item">
		<summary>
			<span>${title}</span>
			${icon({ name: 'ChevronDown' })}
		</summary>
		<div class="children">${children}</div>
	</details>
`

export const accordion = (items) => html`
	<div class="accordion surface">${loop(items, accordionItem)}</div>
`

accordion.style = scss`
	.accordion {
		> .item {
			summary {
				align-items: center;
				cursor: pointer;
				display: flex;
				justify-content: space-between;
				padding: var(--accordion-title-padding, .75em);
				position: relative;
				user-select: none;

				&:--webkit-details-marker {
					display: none;
				}

				&:hover {
					background: var(--c-primary-hover);
				}

				&:active {
					background: var(--c-primary-active);
				}

				span {
					z-index: 1;
				}

				.mdi {
					transition: transform 0.2s ease-in-out;
				}
			}

			> .children {
				padding: var(--accordion-child-padding, .75em);
			}

			+ .item {
				border-top: var(--c-border);
			}

			&[open] > summary {
				.mdi {
					transform: rotate(180deg);
				}
			}
		}
	}
`
