import { md, html } from "cuirk";
import {
  button,
  card,
  cardBody,
  cardActions,
} from "../../src/components/index.js";

export const meta = {
  title: "Button",
};

export const body = md`
# Card

${card({
  children: [
    html`<img src="//picsum.photos/seed/1/400/200" />`,
    cardBody({ title: "title", subtitle: "subtitle", copy: "copy" }),
    cardActions({
      children: [
        button({ children: "test", variant: "ghost", size: "sm" }),
        button({ children: "test", variant: "ghost", size: "sm" }),
      ],
    }),
  ],
})}

## Usage

\`\`\`js
import {
  button,
  card,
  cardBody,
  cardActions,
} from "cuirk/components/index.js";

card({
  children: [
    html\`<img src="//picsum.photos/seed/1/400/100" />\`,
    cardBody({ title: "title", subtitle: "subtitle", copy: "copy" }),
    cardActions({
      children: [
        button({ children: "button", variant: "ghost", size: "sm" }),
        button({ children: "button", variant: "ghost", size: "sm" }),
      ],
    }),
  ],
})
\`\`\`

<style>
  .card {
    max-width: 300px;
  }
</style>
`;
