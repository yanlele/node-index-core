interface Obj {
  userName: string;
  age?: number;
  address?: string;
}

const obj: Obj = { userName: 'yanle' };

const setObj = (obj: Obj) => {
  obj.age = 28;
  obj.address = '重庆';
};

console.log(obj);
setObj(obj);
console.log(obj);

export default {};
