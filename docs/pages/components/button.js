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
import { button } from "cuirk/components/index.js";

button({
	children,
	variant = 'filled',
	size = 'md',
	shape = 'squared',
	href,
	target = '_self',
	type,
	ariaLabel,
	classList,
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

${button({ children: "button", shape: "squared" })}

rounded

${button({ children: "button", shape: "rounded" })}

pill

${button({ children: "button", shape: "pill" })}

square

${button({ children: icon({ name: "Star" }), shape: "square" })}

circle

${button({ children: icon({ name: "Star" }), shape: "circle" })}

### \`size\`

small

${button({ children: "button", size: "sm" })}

medium

${button({ children: "button", size: "md" })}

large

${button({ children: "button", size: "lg" })}

### \`href\`

When a href is provided, the button will be rendered as an \`<a>\` element.

### \`target\`

\`_self\` by default if href is provided, or \`_blank\`.

### \`type\`

The button type, i.e. \`submit\`, or \`reset\`.

### \`ariaLabel\`

The aria label for the button.

### \`classList\`

The class list for the button.

## With Icons

To add an icon, simply include an icon component as a child.

${button({ children: icon({ name: "Star" }) + "Button", shape: "pill" })}
${button({ children: "Button" + icon({ name: "Star" }), shape: "pill" })}
${button({ children: icon({ name: "Star" }), shape: "circle" })}
<br><br>

\`\`\`js
button({ children: icon({ name: "Star" }) + "Button", shape: "pill" })
button({ children: "Button" + icon({ name: "Star" }), shape: "pill" })
button({ children: icon({ name: "Star" }), shape: "circle" })
\`\`\`
`;
