import { avatar } from "../../components/index.js";
import { displayDemo } from "../../utils/display-demo.js";

export const meta = { title: "Avatar" };

const demo = () =>
  avatar({
    children: "A",
    color: "primary",
    image: "//picsum.photos/id/184/64/64",
    shape: "circle",
    size: "medium",
  });

export const body = displayDemo(meta.title, demo);
