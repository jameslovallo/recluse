import { md } from "cuirk";
import { accordion } from "../../../../../dev/accordion.js";

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
import { accordion } from "cuirk/components/index.js";

\${accordion([
	{ title: "Accordion item 1", children: "Accordion item 1 content" },
	{ title: "Accordion item 2", children: "Accordion item 2 content" },
	{ title: "Accordion item 3", children: "Accordion item 3 content" },
])}
\`\`\`
`;
