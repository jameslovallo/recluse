import { html, loop, renderChildren, scss } from "../index.js";
import { icon } from "../components/icon.js";

const accordionItem = ({ children, title }) => html`
	<details class="c-accordion c-surface c-border">
		<summary class="c-row c-action">
			${title} ${icon({ name: "ChevronDown" })}
		</summary>
		<div>${renderChildren(children)}</div>
	</details>
`;

export const accordion = (items) => loop(items, accordionItem);

accordion.style = scss`
	.c-accordion {
    summary {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0.5rem 0.5rem 0.75rem;
      &::marker,
      &::-webkit-details-marker {
        content: "";
        display: none;
      }
      .c-icon {
				transition: transform 0.2s ease-in-out;
      }
    }
    &[open] > summary {
      .c-icon {
        transform: rotate(180deg);
      }
    }
    > div {
      padding: 0.75rem;
    }
    + .c-accordion {
      border-top: 0;
    }
  }
`;
