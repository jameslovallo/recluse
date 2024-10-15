import { md } from "cuirk";
import { accordion } from "../../../components/index.js";

export const meta = {
	title: "Accordion",
};

export const body = md`
# Accordion

${accordion([
	{ title: "Accordion 1", children: "Content" },
	{ title: "Accordion 2", children: "Content" },
	{ title: "Accordion 3", children: "Content" },
])}

## Usage

\`\`\`js
import { accordion } from "cuirk/components/index.js";

accordion([
	{ title: "Accordion 1", children: "Content" },
	{ title: "Accordion 2", children: "Content" },
	{ title: "Accordion 3", children: "Content" },
])
\`\`\`

## Props

### \`items\`

Array of objects with \`title\` and \`children\`.
`;
