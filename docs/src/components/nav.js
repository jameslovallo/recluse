import { html, loop, scss } from "recluse";
import { button, icon, modal } from "./index.js";

export const nav = ({ links, icon: navIcon = "Menu" }) => {
  const desktopStart = links.filter(({ desktop }) => desktop === "start");
  const desktopCenter = links.filter(({ desktop }) => desktop === "center");
  const desktopEnd = links.filter(({ desktop }) => desktop === "end");
  const mobileStart = links.filter(({ mobile }) => mobile === "start");
  const mobileCenter = links.filter(({ mobile }) => mobile === "center");
  const mobileEnd = links.filter(({ mobile }) => mobile === "end");
  return html`
    <nav class="r-nav">
      <div>
        ${modal({
          id: "nav",
          trigger: button({
            children: icon({ name: navIcon }),
            shape: "circle",
            size: "large",
            variant: "text",
            ariaLabel: "Open Menu",
          }),
          children: html`
            <div style="display: grid; margin-bottom: 1rem;">
              ${loop([...mobileStart, ...mobileCenter, ...mobileEnd], (x) =>
                button({ variant: "text", children: x.title, ...x })
              )}
            </div>
          `,
        })}
        ${loop(desktopStart, (x) =>
          button({ variant: "text", children: x.title, ...x })
        )}
      </div>
      <div>
        ${loop(desktopCenter, (x) =>
          button({ variant: "text", children: x.title, ...x })
        )}
      </div>
      <div>
        ${loop(desktopEnd, (x) =>
          button({ variant: "text", children: x.title, ...x })
        )}
      </div>
    </nav>
  `;
};

nav.style = scss`
	.r-nav {
		background: var(--nav, transparent);
		color: var(--nav-color, currentColor);
		display: grid;
		font-size: 15px;
		gap: 1rem;
		grid-template-columns: repeat(3, auto);
		padding: .5rem;

		> div {
			align-items: center;
			display: flex;

			&:not(:first-child):not(:last-child) {
				justify-content: center;
			}

			&:last-child {
				justify-content: end;
			}

			.r-modal {
				@media (min-width: 768px) {
					display: none;
				}

				.trigger .r-button {
					--c-primary: var(--nav-color, white);
				}

				a {
					font-size: 1.5rem;
					padding: .5rem 0;
				}
			}

			> .r-button {
				@media (max-width: 767px) {
					&:not(.show-on-mobile) {
						display: none;
					}
				}
			}
		}
	}
`;
