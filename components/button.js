import { html, classList, renderChildren, scss } from "../index.js";

export const button = ({
  children,
  color = "primary",
  href,
  shape = "rounded",
  size = "medium",
  target = "_self",
  variant = "solid",
}) => {
  const classes = classList([color, shape, size, variant]);
  return href
    ? html`
        <a class="r-button r-action ${classes}" href=${href} target=${target}>
          ${renderChildren(children)}
        </a>
      `
    : html`
        <button class="r-button r-action ${classes}">
          ${renderChildren(children)}
        </button>
      `;
};

button.style = scss`
	.r-button {
		--r-action: currentcolor;
		align-items: center;
		background: var(--r-primary);
		border: none;
		color: var(--r-on-primary);
		cursor: pointer;
		display: inline-flex;
		font-size: 14px;
		height: 1.5rem;
		justify-content: center;
		line-height: 14px;
		overflow: hidden;
		padding: 0 0.75rem;
		position: relative;
		text-decoration: none;
		&.r-outline,
		&.r-text {
			background: transparent;
			color: var(--r-primary);
			padding: 0 0.5rem;
		}
		&.r-outline {
			box-shadow: inset 0 0 0 1px currentcolor;
		}
		&.r-large {
			height: 2rem;
		}
	}
`;
