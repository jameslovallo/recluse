import { md } from "recluse";
import { linkList } from "../../components/index.js";

export const meta = {
	title: "Link List",
};

export const body = md`
# Link List

${linkList({
	children: [
		{ title: "Link list item 1", copy: "Copy ipsum dolor", icon: "Home" },
		{
			title: "Link list item 2",
			copy: "Copy ipsum dolor",
			icon: "Information",
		},
		{ title: "Link list item 3", copy: "Copy ipsum dolor", icon: "Email" },
	],
})}

## Usage

\`\`\`js
import { accordion } from "recluse/components/index.js";

\${accordion([
	{ title: "Accordion item 1", children: "Accordion item 1 content" },
	{ title: "Accordion item 2", children: "Accordion item 2 content" },
	{ title: "Accordion item 3", children: "Accordion item 3 content" },
])}
\`\`\`
`;
