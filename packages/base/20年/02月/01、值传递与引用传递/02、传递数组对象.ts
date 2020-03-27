const arr = ['yanle', 'lele'];

const modifyArr = (arr: string[]) => {
  arr.forEach((item, index) => {
    arr[index] = `${item} ${index}`;
  });
};

modifyArr(arr);
console.log(arr);
