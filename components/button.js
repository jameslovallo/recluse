import { html, scss } from '../index.js'

export const button = ({
	children,
	variant = 'filled',
	size = 'md',
	shape = 'squared',
	href,
	target = '_self',
	type,
}) => {
	const classList = ['button', variant, shape, size].join(' ')
	return href
		? html`
				<a href="${href}" target="${target}" class="${classList}">
					<span class="hover-cover"></span>
					${children}
				</a>
		  `
		: html`
				<button class="${classList}" ${type ? `type="${type}"` : ''}>
					<span class="hover-cover"></span>
					${children}
				</button>
		  `
}

button.style = scss`
	.button {
		align-items: center;
		background: var(--c-primary);
		border: 1px solid var(--c-primary);
		border-radius: 0;
		color: var(--c-primary-color);
		cursor: pointer;
		display: inline-flex;
		font-size: 1rem;
		gap: 0.5em;
		height: 2em;
		justify-content: center;
		overflow: hidden;
		padding: 0 0.75em;
		position: relative;
		text-decoration: none;
		vertical-align: middle;

		> .hover-cover {
			background: currentcolor;
			bottom: 0;
			content: "";
			left: 0;
			opacity: 0;
			position: absolute;
			right: 0;
			top: 0;
		}

		&:hover > .hover-cover {
			opacity: 0.1;
		}

		&:active > .hover-cover {
			opacity: 0.2;
		}

		&.outlined {
			background: transparent;
			border-color: var(--c-primary);
			color: var(--c-primary);
		}
		
		&.subtle {
			background: var(--c-primary-2);
			border-color: var(--c-primary-3);
			color: var(--c-primary);
		}

		&.ghost {
			background: transparent;
			border-color: transparent;
			color: var(--c-primary);

			&:hover {
				border-color: var(--c-primary-3);
				.hover-cover {
					background: var(--c-primary);
				}
			}
		}

		&.sm {
			font-size: 0.75rem;
			letter-spacing: 1px;
		}

		&.lg {
			font-size: 1.25rem;
		}

		&.rounded {
			border-radius: 0.25rem;
		}

		&.pill {
			border-radius: 9999px;
		}

		&.square {
			aspect-ratio: 1;
		}

		&.circle {
			aspect-ratio: 1;
			border-radius: 9999px;
		}

		.mdi {
			min-width: 1.125em;
			width: 1.125em;
		}
	}
`
