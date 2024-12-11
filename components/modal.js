import { html, renderChildren, scss } from "../index.js";
import { button } from "./button.js";

export const modal = ({ open, close, children }) => html`
  <div class="r-modal">
    <div class="r-modal-trigger">
      ${open ? open : button({ children: "Open", shape: "pill" })}
    </div>
    <dialog>
      <div class="content">
        <div class="scroll">${renderChildren(children)}</div>
        <form method="dialog">
          ${close ? close : button({ children: "Close", shape: "pill" })}
        </form>
      </div>
    </dialog>
  </div>
`;

modal.init = () => {
  const modals = document.querySelectorAll(".r-modal");
  modals.forEach((modal) => {
    const trigger = modal.querySelector(".r-modal-trigger > *");
    const dialog = modal.querySelector("dialog");
    trigger.addEventListener("click", () => dialog.showModal());
  });
};

modal.style = scss`
	.r-modal {
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
`;
