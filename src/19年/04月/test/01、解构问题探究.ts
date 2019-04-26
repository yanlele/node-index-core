const obj = {
  username: 'yanle',
};

const {username} = obj;
const {age = {}} = obj;

console.log(username);
console.log(age);
