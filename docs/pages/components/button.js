import { md } from "cuirk";
import { button, icon } from "../../src/components/index.js";

export const meta = {
  title: "Button",
};

export const body = md`
# Button 

${button({ children: "Button" })}

## Usage

\`\`\`js
import { button } from "../../src/components/index.js";

button({
	children,
	variant = 'filled', // filled, outlined, subtle, ghost
	size = 'md', // sm, md, lg
	shape = 'squared', // squared, rounded, pill, square, circle
	href,
	target = '_self',
	type, // i.e. submit
	ariaLabel,
	classList: cList,
})
\`\`\`

## Props

### \`variant\`

filled

${button({ children: "button", variant: "filled" })}

outlined

${button({ children: "button", variant: "outlined" })}

subtle

${button({ children: "button", variant: "subtle" })}

ghost

${button({ children: "button", variant: "ghost" })}


### \`shape\`

squared

${button({ children: "button", variant: "squared" })}

rounded

${button({ children: "button", variant: "rounded" })}

pill

${button({ children: "button", variant: "pill" })}

square

${button({ children: icon({ name: "Star" }), variant: "square" })}

circle

${button({ children: icon({ name: "Star" }), variant: "circle" })}

### \`size\`

small

${button({ children: "button", size: "sm" })}

medium

${button({ children: "button", size: "md" })}

large

${button({ children: "button", size: "lg" })}
`;
