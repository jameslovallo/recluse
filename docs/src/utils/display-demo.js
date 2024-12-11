import { camelCase } from "change-case";

export const displayDemo = (name, fn) => `
# ${name}

${fn()}

## Usage

\`\`\`js
import { ${camelCase(name)} } from "recluse/components/index.js";

${String(fn).replace("() =>", "").trim().replaceAll("\n  ", "\n")}
\`\`\`
`;
