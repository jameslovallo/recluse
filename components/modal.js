import { html, scss, when } from '../index.js'

export const modal = ({ trigger, close, children }) => html`
	<div class="modal">
		<div class="trigger">
			${when(trigger, trigger)}
			${when(!trigger, html`<button>Open Modal</button>`)}
		</div>
		<dialog>
			<div class="content">
				<div class="scroll">${children}</div>
				<form method="dialog">
					${when(close, close)}
					${when(!close, html`<button>Close Modal</button>`)}
				</form>
			</div>
		</dialog>
	</div>
`

modal.init = () => {
	const modals = document.querySelectorAll('.modal')
	modals.forEach((modal) => {
		const trigger = modal.querySelector('.trigger > *')
		const dialog = modal.querySelector('dialog')
		trigger.addEventListener('click', () => dialog.showModal())
	})
}

modal.style = scss`
	.modal {
		> button {
			background: transparent;
			border: none;
			border-radius: 0;
			cursor: pointer;
			display: block;
			padding: 0;
		}

		dialog[open] {
			align-items: center;
			border: none;
			bottom: 0;
			display: flex;
			justify-content: center;
			min-height: 100%;
			left: 0;
			margin: 0;
			position: fixed;
			right: 0;
			top: 0;
			min-width: 100%;
			z-index: 99999;

			> .content {
				display: grid;
				gap: 1rem;
				width: min(80vw, 70ch);

				> .scroll {
					max-height: 70vh;
					overflow: auto;
				}
			}
		}
	}

	body:has(dialog[open]) {
		overflow: hidden;
	}
`
