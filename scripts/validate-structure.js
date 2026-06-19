const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');

const required = [
  'README.md',
  'CLAUDE.md',
  'SECURITY.md',
  'package.json',
  'design-tokens/tokens.json',
  'design-tokens/tokens.css',
  'foundations/color.md',
  'foundations/typography.md',
  'foundations/spacing.md',
  'foundations/accessibility.md',
  'foundations/layout.md',
  'components/button/README.md',
  'components/card/README.md',
  'components/hero/README.md',
  'components/form/README.md',
  'assets/manifest.csv',
  'examples/example-token-output.css',
  'examples/example-component-spec.md',
  'docs/repo-metadata.md',
  'docs/wiki-home.md',
  'docs/discussion-starter.md',
  'scripts/build-css-tokens.js',
  'scripts/validate-structure.js'
];

let failed = false;

function fail(message) {
  console.error(message);
  failed = true;
}

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8');
}

for (const file of required) {
  const full = path.join(repoRoot, file);
  if (!fs.existsSync(full)) {
    fail(`Missing: ${file}`);
  } else {
    console.log(`OK: ${file}`);
  }
}

if (fs.existsSync(path.join(repoRoot, 'design-tokens/tokens.css'))) {
  const css = read('design-tokens/tokens.css');
  if (css.includes('--brand-name') || css.includes('--brand-voice') || css.includes('--brand-provenance')) {
    fail('tokens.css contains brand metadata string tokens.');
  }
}

if (
  fs.existsSync(path.join(repoRoot, 'design-tokens/tokens.css')) &&
  fs.existsSync(path.join(repoRoot, 'examples/example-token-output.css'))
) {
  const generated = read('design-tokens/tokens.css').trim();
  const example = read('examples/example-token-output.css').trim();
  if (generated === example) {
    fail('example-token-output.css duplicates design-tokens/tokens.css.');
  }
}

if (failed) {
  process.exit(1);
}
