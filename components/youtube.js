import { html, scss } from '../index.js'

export const youtube = ({ id = '1g3_CFmnU7k', label = 'Play video' }) => html`
	<div class="youtube">
		<button
			title="${label}"
			aria-label="${label}"
			data-id="${id}"
			style="background: url(https://img.youtube.com/vi/${id}/hqdefault.jpg) no-repeat center center / cover;"
		>
			<svg class="icon" version="1.1" viewBox="0 0 68 48">
				<path
					class="icon-bg"
					d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
				></path>
				<path class="icon-fg" d="M 45,24 27,14 27,34"></path>
			</svg>
		</button>
	</div>
`

youtube.init = () => {
	document.querySelectorAll('.youtube button').forEach((button) => {
		button.addEventListener('click', () => {
			const iframe = document.createElement('iframe')
			iframe.src = `https://www.youtube.com/embed/${button.dataset.id}?autoplay=1`
			iframe.title = 'YouTube video player'
			iframe.allow =
				'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			iframe.allowFullscreen = true
			button.replaceWith(iframe)
		})
	})
}

youtube.style = scss`
	.youtube {
		button,
		iframe {
			aspect-ratio: 16 / 9;
			border: 0;
			display: block;
			width: 100%;
		}
		button {
			align-items: center;
			border: none;
			cursor: pointer;
			display: flex;
			justify-content: center;
			padding: 0;
			
			.icon {
				display: block;
				width: 68px;
			}

			.icon-bg {
				fill: rgba(33, 33, 33, 0.8);
			}

			.icon-fg {
				fill: #fff;
			}

			&:hover .icon-bg {
				fill: red;
			}
		}
	}
`
