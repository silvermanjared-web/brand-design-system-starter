const fs = require("fs");
const path = require("path");

const required = [
  "README.md",
  "CLAUDE.md",
  "SECURITY.md",
  "design-tokens/tokens.json",
  "design-tokens/tokens.css",
  "foundations/color.md",
  "foundations/typography.md",
  "foundations/spacing.md",
  "foundations/accessibility.md",
  "components/button/README.md",
  "components/card/README.md",
  "components/hero/README.md",
  "components/form/README.md"
];

let failed = false;

for (const file of required) {
  const full = path.join(__dirname, "..", file);
  if (!fs.existsSync(full)) {
    console.error(`Missing: ${file}`);
    failed = true;
  } else {
    console.log(`OK: ${file}`);
  }
}

if (failed) {
  process.exit(1);
}
