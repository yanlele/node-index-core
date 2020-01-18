const path = require('path');
const glob = require('glob');
const { flattenDeep } = require('lodash');

const prefix = path.resolve(__dirname, '../packages/');

const handlePathHelper = (pathName, name) => {
  return glob
    .sync(`${pathName}/*`)
    .filter(item => !path.basename(item).includes('.') && !path.basename(item).includes('node_modules'))
    .map(item => `${name}-${path.basename(item)}`);
};

const handlePaths = ['base', 'book'];

const packages = glob.sync(`${prefix}/*`).map(packagePath => {
  const basename = path.basename(packagePath);
  if (handlePaths.includes(basename)) return handlePathHelper(packagePath, basename);
  return basename;
});

packages.push('build');
exports.packages = flattenDeep(packages);

exports.prefix = prefix;
