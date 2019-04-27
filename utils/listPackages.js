const path = require('path');
const glob = require('glob');

const prefix = path.resolve(__dirname, '../packages/');
const packages = glob.sync(`${prefix}/*`).map(package => path.basename(package));

packages.push('build');
exports.packages = packages;

exports.prefix = prefix;
