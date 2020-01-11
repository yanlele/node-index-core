type Func = (name: string, age: number) => Promise<string>;

class Main {
  private readonly myName: string;

  constructor() {
    this.myName = 'yanle';
  }

  test = (name: string, age: number) => {
    console.log(this.myName);
    return `${name} - ${age}`;
  };
}

const main = new Main();
const str = main.test('lele', 28);
console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
console.log(str);
console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
