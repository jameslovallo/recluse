#!/usr/bin/env node

import fs from "fs";
import { Marked } from "marked";
import { gfmHeadingId } from "marked-gfm-heading-id";
import { markedHighlight } from "marked-highlight";
import path from "path";
import prism from "prismjs";

const marked = new Marked(
	markedHighlight({
		langPrefix: "language-",
		highlight(code, lang) {
			if (prism.languages[lang]) {
				return prism.highlight(code, prism.languages[lang], lang);
			} else {
				return code;
			}
		},
	})
).use(gfmHeadingId());

const writePage = async (filename) => {
	const defaultLayout = await import("../../../src/layouts/default.js").then(
		(m) => m.default
	);
	import("../../../" + filename).then(
		({ meta, body, layout: providedLayout }) => {
			const layout = providedLayout || defaultLayout;
			const page = layout({
				meta,
				children: marked.parse(body),
			});
			if (/src.pages.home\.js/.test(filename)) {
				filename = "dist";
			}
			const outDir = filename.replace(/src.pages/, "dist").replace(".js", "");
			fs.mkdirSync(outDir, { recursive: true });
			fs.writeFileSync(outDir + "/index.html", page, {
				encoding: "utf8",
			});
		}
	);
};

const writePages = (startPath, filter) => {
	console.log("Building...");
	if (!fs.existsSync(startPath)) {
		console.log("directory does not exist: ", startPath);
		return;
	}
	const files = fs.readdirSync(startPath, { recursive: true });
	for (var i = 0; i < files.length; i++) {
		var filename = path.join(startPath, files[i]);
		if (filename.endsWith(filter)) {
			writePage(filename);
		}
	}
};

export const build = () => {
	fs.rmSync("./dist", { recursive: true, force: true });
	fs.mkdirSync("./dist");

	writePages("./src/pages", ".js");

	fs.cp("./src", "./dist/src", { recursive: true }, (err) => {
		err && console.error(err);
	});
};
