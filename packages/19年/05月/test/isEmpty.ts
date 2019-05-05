import { isEmpty } from 'lodash';

console.log(
  isEmpty({
    name: 'yanle',
  }),
);
console.log(isEmpty(undefined));
console.log(isEmpty(null));
console.log(isEmpty({}));
