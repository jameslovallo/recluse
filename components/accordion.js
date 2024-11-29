import { html, loop, renderChildren, scss } from "../index.js";
import { icon } from "./icon.js";

const accordionItem = ({ children, title, icon: name = "ChevronDown" }) => html`
  <details class="r-accordion r-surface r-border">
    <summary class="r-row r-action">
      ${title} ${icon ? icon({ name }) : ""}
    </summary>
    <div>${renderChildren(children)}</div>
  </details>
`;

export const accordion = (items) => loop(items, accordionItem);

accordion.style = scss`
	.r-accordion {
    summary {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0.75rem 0.75rem 1rem;
      &::marker,
      &::-webkit-details-marker {
        content: "";
        display: none;
      }
      .r-icon {
				transition: transform 0.2s ease-in-out;
      }
    }
    &[open] > summary {
      .r-icon {
        transform: rotate(180deg);
      }
    }
    > div {
      padding: 1rem;
    }
    + .r-accordion {
      border-top: 0;
    }
  }
`;
