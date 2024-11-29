import { componentScripts, componentStyles, html } from "recluse";
import * as components from "../../../components/index.js";
import globalMeta from "../data/meta.js";
import navLinks from "../data/nav.js";

const { footer, pageMeta, nav } = components;

export default ({ meta, children }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <!-- component styles -->
        ${componentStyles(components)}
        <!-- page meta -->
        ${pageMeta(globalMeta, meta)}
      </head>
      <body>
        ${nav({ links: navLinks })}
        <main>${children}</main>
        <!-- component scripts -->
        ${componentScripts(components)}
      </body>
    </html>
  `;
};
