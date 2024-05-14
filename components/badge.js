import { html, renderChildren, scss } from '../index.js'

export const badge = ({
	title = '!',
	children = html`<div class="placeholder surface"></div>`,
	variant = 'badge',
	horizontal = 'right',
	vertical = 'top',
}) =>
	html`
		<div class="badge">
			${renderChildren(children)}
			<span class="${[variant, horizontal, vertical].join(' ')}">
				${title}
			</span>
		</div>
	`

badge.style = scss`
	.badge {
		position: relative;
		width: max-content;

		> .placeholder {
			display: block;
			height: 4rem;
			width: 12rem;
		}

		> span {
			align-items: center;
			background: var(--c-primary);
			border-radius: 5rem;
			color: var(--c-primary-color);
			display: flex;
			font-size: 12px;
			font-weight: bold;
			justify-content: center;
			line-height: 1;
			min-height: 2em;
			min-width: 2em;
			padding: .5em;
			position: absolute;

			&.top {
				top: -.5rem;

				&.ribbon {
					top: .5rem;
				}
			}

			&.right {
				right: -.5rem;
			}

			&.bottom {
				bottom: -.5rem;

				&.ribbon {
					bottom: .5rem;
				}
			}

			&.left {
				left: -.5rem;
			}

			&.ribbon {
				border-radius: .25rem;
				padding: .25rem .5rem;

				&:before {
					background: inherit;
					content: '';
					height: .5rem;
					position: absolute;
					width: .5rem;
				}

				&.top.right {
					border-bottom-right-radius: 0;

					&:before {
						clip-path: polygon(0 0, 0% 100%, 100% 0);
						right: 0;
						top: 100%;
					}
				}

				&.top.left {
					border-bottom-left-radius: 0;

					&:before {
						clip-path: polygon(0 0, 100% 100%, 100% 0);
						left: 0;
						top: 100%;
					}
				}

				&.bottom.right {
					border-top-right-radius: 0;

					&:before {
						bottom: 100%;
						clip-path: polygon(0 0, 0 100%, 100% 100%);
						right: 0;
					}
				}

				&.bottom.left {
					border-top-left-radius: 0;

					&:before {
						bottom: 100%;
						clip-path: polygon(100% 0, 0 100%, 100% 100%);
						left: 0;
					}
				}
			}

			.mdi {
				width: 1rem;
			}
		}
	}	
`
