const path = require('path');
const glob = require('glob');
const { flattenDeep } = require('lodash');

const prefix = path.resolve(__dirname, '../packages/');
const packages = glob.sync(`${prefix}/*`).map(packagePath => {
  if (path.basename(packagePath) === 'base')
    return glob
      .sync(`${packagePath}/*`)
      .filter(item => !path.basename(item).includes('.'))
      .map(item => `base-${path.basename(item)}`);
  return path.basename(packagePath);
});

packages.push('build');
exports.packages = flattenDeep(packages);

exports.prefix = prefix;
