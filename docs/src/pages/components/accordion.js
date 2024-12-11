import { accordion } from "../../components/index.js";
import { displayDemo } from "../../utils/display-demo.js";

export const meta = {
  title: "Accordion",
};

const demo = () =>
  accordion([
    { title: "Title ipsum dolor", children: "Child ipsum dolor" },
    { title: "Title ipsum dolor", children: "Child ipsum dolor" },
    { title: "Title ipsum dolor", children: "Child ipsum dolor" },
  ]);

export const body = displayDemo(meta.title, demo);
