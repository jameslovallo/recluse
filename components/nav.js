import { html, loop, scss } from '../index.js'
import { button, icon, modal, textLink } from './index.js'

export const nav = ({ links, icon: navIcon = 'Menu' }) => {
	const left = links.filter(({ position }) => position === 'start')
	const center = links.filter(({ position }) => position === 'center')
	const right = links.filter(({ position }) => position === 'end')
	return html`
		<nav>
			<div>
				${modal({
					id: 'nav',
					trigger: button({
						children: icon({ name: navIcon }),
						shape: 'circle',
						size: 'lg',
						variant: 'ghost',
					}),
					children: html`
						<div style="display: grid; margin-bottom: 1rem;">
							${loop(links, textLink)}
						</div>
					`,
				})}
				${loop(left, textLink)}
			</div>
			<div>${loop(center, textLink)}</div>
			<div>${loop(right, textLink)}</div>
		</nav>
	`
}

nav.style = scss`
	nav {
		background: var(--nav, black);
		color: var(--nav-color, white);
		display: grid;
		font-size: 15px;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		height: 3rem;
		padding: 0 .5rem;

		> div {
			align-items: center;
			display: flex;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;
			}

			.modal {
				@media (min-width: 768px) {
					display: none;
				}

				.trigger .button {
					--c-primary: white;
				}

				a {
					font-size: 1.5rem;
					padding: .5rem 0;
				}
			}

			a {
				color: inherit;
				text-decoration: none;
			}

			> a {
				padding: 1rem .5rem;

				&:hover {
					background: var(--c-primary-hover);
				}

				&:active {
					background: var(--c-primary-active);
				}

				@media (max-width: 767px) {
					&:not(.show-on-mobile) {
						display: none;
					}
				}
			}
		}
	}
`
