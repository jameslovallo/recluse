import { icon } from "../../components/index.js";
import { displayDemo } from "../../utils/display-demo.js";

export const meta = { title: "Icon" };

const demo = () => icon({ color: "primary", name: "Star", size: "24px" });

export const body = displayDemo(meta.title, demo);
