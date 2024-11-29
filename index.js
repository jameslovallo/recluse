import fs from "fs";
import { compileString } from "sass";

const combine = (strings, ...values) => {
  return strings
    .map((string, i) => string + (values[i] || ""))
    .join("")
    .trim();
};

export const html = combine;
export const md = combine;
export const css = combine;
export const scss = combine;
export const sass = combine;

export const loop = (arr, template) => {
  if (typeof arr === "number") {
    arr = [...Array(arr)];
  }
  return arr
    .map((el, index) => {
      if (typeof template === "function") {
        return template({ ...el, index });
      } else return template;
    })
    .join("");
};

export const renderChildren = (children) =>
  Array.isArray(children) ? children.join("") : children;

export const when = (condition, html) => (condition ? html : "<!-- -->");

export const componentStyles = (components) => html`
  <style>
    :root {
    	font-family: sans-serif;
    	--r-dark: black;
    	--r-light: white;
    	--r-neutral: #8888;
    	--r-neutral-light: #8882;
    	--r-primary: #2962ff;
    	--r-on-primary: white;
    	--r-secondary: #6200ea;
    	--r-on-secondary: white;
    	--r-success: #00c853;
    	--r-on-success: white;
    	--r-error: #d50000;
    	--r-on-error: white;
    	--r-warning: #ffd600;
    	--r-on-warning: black;
    	--r-surface: #8881;
    }

    * {
    	box-sizing: border-box;
    }

    .r-square,
    .r-circle {
    	align-items: center;
    	aspect-ratio: 1;
    	display: inline-flex;
    	justify-content: center;
    	vertical-align: middle;
    }

    .r-circle {
    	border-radius: 50%;
    }

    .r-rounded {
    	border-radius: var(--r-rounded-radius, 0.25rem);
    }

    .r-pill {
    	border-radius: var(--r-pill-radius, 50vh);
    }

    .r-row {
    	display: flex;
    	gap: 0.5rem;
    }

    .r-column {
    	display: flex;
    	flex-direction: column;
    	gap: 0.5rem;
    }

    .r-stack {
    	display: inline-grid;
    }

    .r-stack > * {
    	grid-area: 1/-1;
    	width: 100%;
    }

    .r-center {
    	align-items: center;
    	display: flex;
    	justify-content: center;
    }

    .r-light {
    	color: var(--r-dark);
    }

    .r-dark {
    	color: var(--r-light);
    }

    .r-primary {
    	background: var(--r-primary);
    	color: var(--r-on-primary);
    }

    .r-primary.invert {
    	background: var(--r-on-primary);
    	color: var(--r-primary);
    }

    .r-secondary {
    	background: var(--r-secondary);
    	color: var(--r-on-secondary);
    }

    .r-secondary.invert {
    	background: var(--r-on-secondary);
    	color: var(--r-secondary);
    }

    .r-success {
    	background: var(--r-success);
    	color: var(--r-on-success);
    }

    .r-success.invert {
    	background: var(--r-on-success);
    	color: var(--r-success);
    }

    .r-error {
    	background: var(--r-error);
    	color: var(--r-on-error);
    }

    .r-error.invert {
    	background: var(--r-on-error);
    	color: var(--r-error);
    }

    .r-warning {
    	background: var(--r-warning);
    	color: var(--r-on-warning);
    }

    .r-warning.invert {
    	background: var(--r-on-warning);
    	color: var(--r-warning);
    }

    .r-surface {
    	background: var(--r-surface, var(--r-neutral-light));
    	position: relative;
    }

    .r-action {
    	cursor: pointer;
    	position: relative;
    }
    .r-action:before {
    	background: var(--r-action, var(--r-primary));
    	bottom: 0;
    	content: "";
    	left: 0;
    	opacity: 0;
    	position: absolute;
    	right: 0;
    	top: 0;
    }

    .r-action:hover:before {
    	opacity: 0.15;
    }

    .r-action:active:before {
    	opacity: 0.3;
    }

    .r-border {
    	border: 1px solid var(--r-neutral);
    }


    ${compileString(
      Object.values(components)
        .map((component) => component.style)
        .join("\n")
    ).css}
  </style>
`;

export const componentScripts = (components) =>
  Object.values(components)
    .map((component) => {
      if (component.init) {
        const scriptArr = String(component.init).split("\n");
        scriptArr.shift() && scriptArr.pop();
        return `<script>${scriptArr.join("\n")}</script>`;
      }
    })
    .join("\n");

export const createTags = (data, type) => {
  return !!data
    ? data
        .map((tag) => {
          const attrs = Object.keys(tag)
            .map((key) => `${key}="${tag[key]}"`)
            .join(" ");
          if (type === "script") {
            return `<script ${attrs}></script>`;
          } else if (type === "link") {
            return `<link ${attrs}>`;
          }
        })
        .join("\n")
    : "";
};

export const embedCode = (file) =>
  [
    "```" + file.split(".").pop(),
    fs.readFileSync(file, "utf-8").replaceAll("\t", "  "),
    "```",
  ].join("\n");

export const classList = (props) =>
  props
    .map((prop) => `r-${prop.replaceAll(" ", " c-")}`)
    .join(" ")
    .trim();
