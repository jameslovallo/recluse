import { md } from "recluse";
import { accordion } from "../../components/index.js";

export const meta = {
  title: "Accordion",
};

export const body = md`
# Accordion

${accordion([
  { title: "Accordion item 1", children: "Accordion item 1 content" },
  { title: "Accordion item 2", children: "Accordion item 2 content" },
  { title: "Accordion item 3", children: "Accordion item 3 content" },
])}

## Usage

\`\`\`js
import { accordion } from "recluse/components/index.js";

accordion([
	{ title: "Accordion item 1", children: "Accordion item 1 content" },
	{ title: "Accordion item 2", children: "Accordion item 2 content" },
	{ title: "Accordion item 3", children: "Accordion item 3 content" },
])
\`\`\`
`;
