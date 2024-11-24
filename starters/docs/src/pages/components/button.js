import { md } from "cuirk";
import { button } from "../../../../../dev/button.js";

export const meta = {
  title: "Button",
};

export const body = md`
# Button

${button({
  children: "Button",
  color: "primary",
  shape: "rounded",
  size: "large",
})}

${button({
  children: "Button",
  color: "secondary",
  shape: "pill",
})}

${button({
  children: "A",
  color: "tertiary",
  shape: "circle",
})}

## Usage

\`\`\`js
import { button } from "cuirk/buttons/index.js";

\${button({
	children: "A",
	color: "primary",
	shape: "rounded square",
	size: "medium",
})}
\`\`\`
`;
