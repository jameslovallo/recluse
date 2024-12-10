import { md } from "recluse";
import { linkList } from "../../components/index.js";

export const meta = {
  title: "Link List",
};

export const body = md`
# Link List

${linkList({
  children: [
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Home" },
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Layers" },
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Email" },
  ],
})}

## Usage

\`\`\`js
import { accordion } from "recluse/components/index.js";

linkList({
  children: [
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Home" },
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Layers" },
    { title: "Title ipsum dolor", copy: "Copy ipsum dolor", icon: "Email" },
  ],
})
\`\`\`
`;
