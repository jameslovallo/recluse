import { md } from "cuirk";
import { button } from "../../../../../dev/button.js";

export const meta = {
  title: "Button",
};

export const body = md`
# Button

${button({
  children: "A",
  color: "primary",
  shape: "rounded square",
  size: "medium",
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
