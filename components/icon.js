import * as icons from "@mdi/js";
import { html, scss } from "../index.js";

export const icon = ({ name = "Home", size = "24px" }) => {
  const icon = icons["mdi" + name];
  return html`
    <svg class="r-icon" viewBox="0 0 24 24" width="${size}">
      <path d="${icon}" />
    </svg>
  `;
};

icon.style = scss`
	.r-icon {
		display: block;
    fill: currentColor;
    flex-shrink: 0;
	}
`;
