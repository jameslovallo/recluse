import { html, renderChildren, scss, when } from "../index.js";

const classList = (props) =>
	props
		.map((prop) => `c-${prop.replaceAll(" ", " c-")}`)
		.join(" ")
		.trim();

export const avatar = ({
	children,
	image,
	shape = "circle",
	size = "medium",
	color = "primary",
}) => html`
	<div class="c-avatar c-stack ${classList([shape, size, color])}">
		${when(image, html`<img src="${image}" class="c-circle" />`)}
		${when(
			children,
			html`<span class="c-center">${renderChildren(children)}</span>`
		)}
	</div>
`;

avatar.style = scss`
  .c-avatar {
    &:has(img) {
      background: transparent;
    }
    &.c-small {
      width: 2rem;
      span {
        font-size: 1rem;
      }
    }
    &.c-medium {
      width: 3rem;
      span {
        font-size: 1.5rem;
      }
    }
    &.c-large {
      width: 4rem;
      span {
        font-size: 2rem;
      }
    }
  }
`;
