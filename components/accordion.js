import { html, loop, scss } from '../index.js'

const accordionItem = ({ title, children }) => html`
	<details class="item">
		<summary>
			<span>${title}</span>
		</summary>
		<div class="children">${children}</div>
	</details>
`

export const accordion = (items) => html`
	<div class="accordion">${loop(items, accordionItem)}</div>
`

accordion.style = scss`
	.accordion {
		> .item {
			background: var(--c-surface);
			border: var(--c-border);
			color: var(--c-surface-color);

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

				&:after {
					border-bottom: 1px solid currentcolor;
					border-right: 1px solid currentcolor;
					content: "";
					height: 0.5em;
					transform: translatey(-25%) rotate(45deg);
					transform-origin: center;
					transition: transform 0.25s;
					width: 0.5em;
				}

				&:hover {
					background: var(--c-primary-hover);
					&:after {
						border-color: var(--c-primary);
					}
				}

				&:active {
					background: var(--c-primary-active);
				}

				span {
					z-index: 1;
				}
			}

			&[open] summary:after {
				transform: translatey(25%) rotate(225deg);
			}

			> .children {
				padding: var(--accordion-child-padding, .75em);
			}

			+ .accordion {
				border-top: none;
			}
		}
	}
`
