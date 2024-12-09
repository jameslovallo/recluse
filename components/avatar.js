import { classList, html, renderChildren, scss, when } from "../index.js";

export const avatar = ({
  children,
  color = "primary",
  image,
  shape = "circle",
  size = "medium",
}) => html`
  <div class="r-avatar r-stack ${classList([shape, size, color])}">
    ${when(image, html`<img src="${image}" class="r-circle" />`)}
    ${when(
      children,
      html`<span class="r-center">${renderChildren(children)}</span>`
    )}
  </div>
`;

avatar.style = scss`
  .r-avatar {
    &:has(img) {
      background: transparent;
    }
    &.r-small {
      width: 2rem;
      span {
        font-size: 1rem;
      }
      .r-icon {
        width: 1rem;
      }
    }
    &.r-medium {
      width: 3rem;
      span {
        font-size: 1.5rem;
      }
    }
    &.r-large {
      width: 4rem;
      span {
        font-size: 2rem;
      }
    }
  }
`;
