import { mergeWith } from 'lodash';

// function customizer(objValue, srcValue) {
//   if (isArray(objValue)) {
//     console.log(`<${'='.repeat(100)}>`);
//     console.log(objValue);
//     console.log(srcValue);
//     console.log(`<${'='.repeat(100)}>`);
//     return objValue.concat(srcValue);
//   }
// }

const object = { a: [1], b: [2], c: 5 };
const other = { a: [3], b: [4] };

const merge = (...items: any[]) => {
  const args = [
    ...items,
    function(objValue: any, srcValue: any) {
      console.log(`<${'='.repeat(100)}>`);
      console.log(objValue);
      console.log(srcValue);
      console.log(`<${'='.repeat(100)}>`);
      return function(...options: any[]) {
        console.log(options);
        console.log(this);
        objValue.concat(srcValue);
      };
    },
  ];

  return mergeWith.apply(undefined, args);
};

console.log(merge(object, other));
