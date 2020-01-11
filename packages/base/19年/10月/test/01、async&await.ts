// const func1 = () => new Promise(resolve => resolve('func1'));

let timer = 0;
const func = async (): Promise<string | any> => {
  timer++;
  if (timer >= 10) {
    return 'loop';
  }

  return await func();
};

const main = async () => {
  const res = await func();

  console.log(res);
};

main();

export default {};
