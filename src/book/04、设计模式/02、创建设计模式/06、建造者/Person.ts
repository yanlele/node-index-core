import {Human, Named, Work} from "./work";

class Person extends Human{
  public readonly name: Named;
  public readonly work: Work;

  constructor(name:string, work: string, params?: {skill?: string, hobby?: string}) {
    super({params: params});
    this.name = new Named(name);
    this.work = new Work(work);
  }
}

const person: Person = new Person('颜 乐乐', 'code');
console.log(person.skill);
console.log(person.hobby);
console.log(person.getSkill());
console.log(person.getHobby());
console.log(person.name.firstName);
console.log(person.name.secondName);
console.log(person.work.work);
console.log(person.work.desc);
person.work.changeDesc('更改职位描述， 虽然我还是一个程序员， 但是我是宅男');
console.log(person.work.desc);

