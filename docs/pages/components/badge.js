import { md } from "cuirk";
import { badge, button, card, cardBody } from "../../src/components/index.js";

export const meta = {
	title: "Badge",
};

export const body = md`
# Badge

${badge({
	title: "!",
	children: undefined,
	variant: "badge",
	horizontal: "right",
	vertical: "top",
})}

## Usage

\`\`\`js
import { badge } from "cuirk/components/index.js";

badge({
  title: '!',
  children: undefined,
  variant: 'badge',
  horizontal: 'right',
  vertical: 'top',
})
\`\`\`

## Props

### \`title\`

Content to display inside the badge.

${badge({ title: "3" })}

### \`children\`

Content that the badge will be placed on top of.

${badge({
	title: "New",
	children: card({
		children: cardBody({
			title: "Card Title",
			subtitle: "Card Subtitle",
			copy: "Lorem ipsum dolor sit amet",
		}),
	}),
})}

### \`variant\`

\`badge\`

${badge({ title: "badge" })}

\`ribbon\`

${badge({ title: "ribbon", variant: "ribbon" })}

### \`horizontal\`

\`left\`

${badge({ title: "left", variant: "ribbon", horizontal: "left" })}

\`right\`

${badge({ title: "right", variant: "ribbon", horizontal: "right" })}

### \`vertical\`

\`top\`

${badge({ title: "top", variant: "ribbon", vertical: "top" })}

\`bottom\`

${badge({ title: "bottom", variant: "ribbon", vertical: "bottom" })}
`;
