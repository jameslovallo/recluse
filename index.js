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
    	--c-dark: black;
    	--c-light: white;
    	--c-neutral: #8888;
    	--c-neutral-light: #8882;
    	--c-primary: #2962ff;
    	--c-on-primary: white;
    	--c-secondary: #6200ea;
    	--c-on-secondary: white;
    	--c-success: #00c853;
    	--c-on-success: white;
    	--c-error: #d50000;
    	--c-on-error: white;
    	--c-warning: #ffd600;
    	--c-on-warning: black;
    	--c-surface: #8881;
    }

    * {
    	box-sizing: border-box;
    }

    .c-square,
    .c-circle {
    	align-items: center;
    	aspect-ratio: 1;
    	display: inline-flex;
    	justify-content: center;
    	vertical-align: middle;
    }

    .c-circle {
    	border-radius: 50%;
    }

    .c-rounded {
    	border-radius: var(--c-rounded-radius, 0.25rem);
    }

    .c-pill {
    	border-radius: var(--c-pill-radius, 50vh);
    }

    .c-row {
    	display: flex;
    	gap: 0.5rem;
    }

    .c-column {
    	display: flex;
    	flex-direction: column;
    	gap: 0.5rem;
    }

    .c-stack {
    	display: inline-grid;
    }

    .c-stack > * {
    	grid-area: 1/-1;
    	width: 100%;
    }

    .c-center {
    	align-items: center;
    	display: flex;
    	justify-content: center;
    }

    .c-light {
    	color: var(--c-dark);
    }

    .c-dark {
    	color: var(--c-light);
    }

    .c-primary {
    	background: var(--c-primary);
    	color: var(--c-on-primary);
    }

    .c-primary.invert {
    	background: var(--c-on-primary);
    	color: var(--c-primary);
    }

    .c-secondary {
    	background: var(--c-secondary);
    	color: var(--c-on-secondary);
    }

    .c-secondary.invert {
    	background: var(--c-on-secondary);
    	color: var(--c-secondary);
    }

    .c-success {
    	background: var(--c-success);
    	color: var(--c-on-success);
    }

    .c-success.invert {
    	background: var(--c-on-success);
    	color: var(--c-success);
    }

    .c-error {
    	background: var(--c-error);
    	color: var(--c-on-error);
    }

    .c-error.invert {
    	background: var(--c-on-error);
    	color: var(--c-error);
    }

    .c-warning {
    	background: var(--c-warning);
    	color: var(--c-on-warning);
    }

    .c-warning.invert {
    	background: var(--c-on-warning);
    	color: var(--c-warning);
    }

    .c-surface {
    	background: var(--c-surface, var(--c-neutral-light));
    	position: relative;
    }

    .c-action {
    	cursor: pointer;
    	position: relative;
    }
    .c-action:before {
    	background: var(--c-action, var(--c-primary));
    	bottom: 0;
    	content: "";
    	left: 0;
    	opacity: 0;
    	position: absolute;
    	right: 0;
    	top: 0;
    }

    .c-action:hover:before {
    	opacity: 0.15;
    }

    .c-action:active:before {
    	opacity: 0.3;
    }

    .c-border {
    	border: 1px solid var(--c-neutral);
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
    .map((prop) => `c-${prop.replaceAll(" ", " c-")}`)
    .join(" ")
    .trim();
