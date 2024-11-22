import { html, classList, renderChildren, scss } from "../index.js";

export const button = ({
	children,
	color = "primary",
	href,
	shape = "pill",
	size = "medium",
	target = "_self",
	variant = "solid",
}) => {
	const classes = classList([color, shape, size, variant]);
	return href
		? html`
				<a class="c-button c-action ${classes}" href=${href} target=${target}>
					${renderChildren(children)}
				</a>
		  `
		: html`
				<button class="c-button c-action ${classes}">
					${renderChildren(children)}
				</button>
		  `;
};

button.style = scss`
	.c-button {
		--c-action: currentcolor;
		align-items: center;
		background: var(--c-primary);
		border: none;
		color: var(--c-on-primary);
		cursor: pointer;
		display: inline-flex;
		height: 1.5rem;
		justify-content: center;
		line-height: 1;
		overflow: hidden;
		padding: 0 0.5rem;
		position: relative;
		text-decoration: none;
		&.c-outline,
		&.c-text {
			background: transparent;
			color: var(--c-primary);
		}
		&.c-outline {
			box-shadow: inset 0 0 0 1px currentcolor;
		}
	}
`;
