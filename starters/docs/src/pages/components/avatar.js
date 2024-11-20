import { md } from "cuirk";
import { avatar } from "../../../../../dev/avatar.js";

export const meta = {
	title: "Avatar",
};

export const body = md`
# Avatar

<div class="c-row">

${avatar({
	children: "A",
	size: "medium",
	color: "primary",
	shape: "rounded square",
})}

${avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	size: "medium",
	color: "dark",
	shape: "circle",
})}

</div>

## Usage

\`\`\`js
import { avatar } from "cuirk/components/index.js";

\${avatar({
	children: "A",
	size: "medium",
	color: "primary",
	shape: "rounded square",
})}

\${avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	size: "medium",
	color: "dark",
	shape: "circle",
})}
\`\`\`
`;
