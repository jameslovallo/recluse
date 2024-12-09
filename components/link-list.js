import { html, scss, when } from "../index.js";
import { avatar } from "./avatar.js";
import { icon } from "./icon.js";

export const linkList = ({
	children,
	color,
	shape = "circle",
	size = "small",
}) =>
	html`
		<ul class="r-link-list">
			${children
				.map(
					({ href, target = "_blank", copy, icon: name, title }) => html`
						<li>
							<a
								class="r-action r-row r-${shape === "circle" ? "pill" : shape}"
								href="${href}"
								target="${target}"
							>
								${when(
									name,
									avatar({
										children: icon({ name }),
										color,
										shape,
										size,
									})
								)}
								<span>
									${when(title, title)}
									${when(copy, html`<small>${copy}</small>`)}
								</span>
							</a>
						</li>
					`
				)
				.join("")}
		</ul>
	`;

linkList.style = scss`
  .r-link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    > li > a {
      align-items: center;
      color: inherit;
      overflow: hidden;
      padding: 0.5rem;
      text-decoration: none;
      > span {
        display: grid;
        > small {
          opacity: 0.75;
        }
      }
    }
  }
`;
