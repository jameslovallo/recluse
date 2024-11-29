import { html, renderChildren, scss, classList } from "../index.js";

export const card = ({
  children,
  color = "surface",
  shape = "rounded",
}) => html`
  <div class="r-card r-surface r-border ${classList([shape, color])}">
    ${renderChildren(children)}
  </div>
`;

card.style = scss`
  .r-card {
    > h1, > h2, > h3, > h4, > h5, > h6, > p, > ol, > ul {
      line-height: 1;
      margin: 1rem,
    }
    > .r-button.r-text {
      margin: .25rem 0;
      &:first-of-type {
        margin-inline-start: 0.25rem;
      }
      &:last-of-type {
        margin-inline-end: 0.25rem;
      }
    }
  }
`;
