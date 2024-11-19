import * as icons from "@mdi/js";
import { html, scss } from "../index.js";

export const icon = ({ name = "Home", size = 24, color = "currentColor" }) => {
	const icon = icons["mdi" + name];
	return html`
		<svg class="mdi c-icon" viewBox="0 0 24 24" width="${size}">
			<path d="${icon}" fill="${color}" />
		</svg>
	`;
};

icon.style = scss`
	.mdi {
		display: block;
	}
`;
