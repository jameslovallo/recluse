import { md, html } from "recluse";
import { button, card } from "../../components/index.js";

export const meta = {
  title: "Card",
};

export const body = md`
# Card

${card({
  children: [
    html`<h3>An h3 tag</h3>`,
    html`<p>A paragraph tag</p>`,
    button({ children: "Text", variant: "text" }),
    button({ children: "Text", variant: "text" }),
  ],
  color: "surface",
  shape: "rounded",
})}

## Usage

\`\`\`js
import { avatar } from "recluse/components/index.js";

\${avatar({
	children: "A",
	color: "primary",
	shape: "rounded square",
	size: "medium",
})}

\${avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	shape: "circle",
	size: "medium",
})}
\`\`\`
`;
