import * as path from 'path';
import * as fs from 'fs';
import Handlebars from 'handlebars';

const source: string = fs.readFileSync(path.resolve(__dirname, 'template.hbs'), {
  encoding: 'utf-8',
});
const template = Handlebars.compile(source, {
  noEscape: true,
  // assumeObjects: true,
  // preventIndent: true,
  // ignoreStandalone: true,
});
const outputTemplate = template({
  path: '/api/source/main',
  delay: 1000,
  method: 'POST',
  template: JSON.stringify(
    {
      name: 'yanle',
      age: 27,
    },
    undefined,
    4,
  ),
});

console.log(source);
console.log('outputTemplate', outputTemplate);

const resolve = fs.writeFileSync(path.resolve(__dirname, 'output.js'), outputTemplate);
console.log(resolve);
