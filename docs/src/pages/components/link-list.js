import { displayDemo } from "../../utils/display-demo.js";
import { linkList } from "../../components/index.js";

export const meta = {
  title: "Link List",
};

const demo = () =>
  linkList({
    children: [
      { icon: "Home", title: "Title ipsum dolor", copy: "Copy ipsum dolor" },
      { icon: "Layers", title: "Title ipsum dolor", copy: "Copy ipsum dolor" },
      { icon: "Email", title: "Title ipsum dolor", copy: "Copy ipsum dolor" },
    ],
    color: "primary",
    shape: "rounded square",
  });

export const body = displayDemo(meta.title, demo);
