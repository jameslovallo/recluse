import { html } from "recluse";
import { button, card } from "../../components/index.js";
import { displayDemo } from "../../utils/display-demo.js";

export const meta = {
  title: "Card",
};

const demo = () =>
  card({
    children: [
      html`<h3>Title ipsum dolor</h3>`,
      html`<p>Copy ipsum dolor</p>`,
      button({ children: "Text", variant: "text" }),
      button({ children: "Text", variant: "text" }),
    ],
    color: "surface",
    shape: "rounded",
  });

export const body = displayDemo(meta.title, demo);
