import { md } from "recluse";
import { contactForm } from "../components/index.js";

export const meta = {
	title: "Contact",
};

export const body = md`
# Contact

${contactForm()}
`;
