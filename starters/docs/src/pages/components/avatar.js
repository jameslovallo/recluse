import { md } from "cuirk";
import { avatar } from "../../../../../dev/avatar.js";

export const meta = {
	title: "Avatar",
};

export const body = md`
# Avatar

${avatar({
	children: "A",
	color: "primary",
	shape: "rounded square",
	size: "medium",
})}

${avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	shape: "circle",
	size: "medium",
})}

## Usage

\`\`\`js
import { avatar } from "cuirk/components/index.js";

\${avatar({
	children: "A",
	color: "primary",
	shape: "rounded square",
	size: "medium",
})}

\${avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	shape: "circle",
	size: "medium",
})}
\`\`\`
`;
