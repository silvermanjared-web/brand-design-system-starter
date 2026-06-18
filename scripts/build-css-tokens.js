const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, '..', 'design-tokens', 'tokens.json');
const output = path.join(__dirname, '..', 'design-tokens', 'tokens.css');
const tokens = JSON.parse(fs.readFileSync(source, 'utf8'));

function flatten(node, prefix = []) {
  const rows = [];

  for (const key of Object.keys(node)) {
    const value = node[key];

    if (
      value &&
      typeof value === 'object' &&
      Object.prototype.hasOwnProperty.call(value, 'value')
    ) {
      rows.push([`--${[...prefix, key].join('-')}`, value.value]);
    } else if (value && typeof value === 'object') {
      rows.push(...flatten(value, [...prefix, key]));
    }
  }

  return rows;
}

const lines = [':root {'];

for (const [name, value] of flatten(tokens)) {
  lines.push(`  ${name}: ${value};`);
}

lines.push('}');

fs.writeFileSync(output, lines.join('\n') + '\n');

console.log(`Wrote ${output}`);
