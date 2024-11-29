import { md } from "recluse";
import { button } from "../../components/index.js";

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
import { button } from "recluse/buttons/index.js";

\${button({
  children: "Button",
  color: "primary",
  shape: "rounded",
  size: "large",
})}

\${button({
  children: "Button",
  color: "secondary",
  shape: "pill",
})}

\${button({
  children: "A",
  color: "tertiary",
  shape: "circle",
})}
\`\`\`
`;
