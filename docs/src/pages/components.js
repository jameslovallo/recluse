import { md } from "recluse";
import { linkList } from "../components/index.js";
import * as recluseComponents from "recluse/components/index.js";
import { capitalCase, kebabCase } from "change-case";

export const meta = {
  title: "Components",
};

const components = Object.keys(recluseComponents);

const icons = {
  accordion: "ArrowExpandDown",
  avatar: "AccountCircleOutline",
  button: "ButtonPointer",
  card: "CardOutline",
  icon: "VectorSquare",
  linkList: "FormatListBulletedType",
  modal: "WindowMaximize",
  youtube: "Youtube",
};

export const body = md`
# ${meta.title}

${linkList({
  children: components.map((c) => ({
    title: capitalCase(c),
    href: kebabCase(c),
    icon: icons[c],
  })),
})}
`;
