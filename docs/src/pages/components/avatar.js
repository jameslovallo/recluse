import { md } from "recluse";
import { avatar } from "../../components/index.js";

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
import { avatar } from "recluse/components/index.js";

avatar({
	children: "A",
	color: "primary",
	shape: "rounded square",
	size: "medium",
})

avatar({
	children: "A",
	image: "//picsum.photos/id/184/64/64",
	shape: "circle",
	size: "medium",
})
\`\`\`
`;
