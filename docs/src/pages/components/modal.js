import { html } from "recluse";
import { button, icon, modal } from "../../components/index.js";
import { displayDemo } from "../../utils/display-demo.js";

export const meta = { title: "Modal" };

const demo = () =>
  modal({
    id: "nav",
    open: button({
      children: icon({ name: "Menu" }),
      shape: "circle",
      size: "large",
      variant: "text",
      ariaLabel: "Open Menu",
    }),
    close: button({ children: "Close", variant: "text" }),
    children: html`
      <h2>Title ipsum dolor</h2>
      <div style="display: grid; margin-bottom: 1rem; width: max-content">
        ${button({ variant: "text", children: "Button ipsum" })}
        ${button({ variant: "text", children: "Button ipsum" })}
        ${button({ variant: "text", children: "Button ipsum" })}
      </div>
    `,
  });

export const body = displayDemo(meta.title, demo);
