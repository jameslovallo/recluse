import { displayDemo } from "../../utils/display-demo.js";
import { button } from "../../components/index.js";

export const meta = { title: "Button" };

const demo = () =>
  button({
    children: "Button",
    color: "primary",
    shape: "rounded",
    size: "large",
  });

export const body = displayDemo(meta.title, demo);
