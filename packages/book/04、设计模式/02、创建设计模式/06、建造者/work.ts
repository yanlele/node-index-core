// Human 属性skill\hobby  方法， 获取skill\hobby

interface HumanParamsInterface {
  params?: { skill?: string; hobby?: string };
}

export class Human {
  public readonly skill?: string;
  public readonly hobby?: string;

  constructor({ params = { skill: '保密', hobby: '保密' } }: HumanParamsInterface) {
    this.skill = params.skill;
    this.hobby = params.hobby;
  }

  getSkill() {
    return this.skill;
  }

  getHobby() {
    return this.hobby;
  }
}

// Named 添加属性 whileName firstName、secondName
export class Named {
  public readonly whileName: string;
  public readonly firstName: string;
  public readonly secondName: string;

  constructor(name) {
    this.whileName = name;
    if (name.indexOf(' ') > -1) {
      this.firstName = name.slice(0, name.indexOf(' '));
      this.secondName = name.slice(name.indexOf(' ') + 1);
    }
  }
}

// Work  预设 code\UI\UE\teach   and    default | 方法， changeWork\changeDesc
export class Work {
  public work: string;
  public desc: string;

  constructor(word: string) {
    switch (word) {
      case 'code':
        this.work = '工程师';
        this.desc = '写代码';
        break;
      case 'UI':
      case 'UE':
        this.work = '设计师';
        this.desc = '艺术工作';
        break;
      case 'teach':
        this.work = '教师';
        this.desc = '教书育人';
        break;
      default:
        this.work = word;
        this.desc = '没有你描述的职位';
    }
  }

  changeWork(work: string) {
    this.work = work;
  }

  changeDesc(desc: string) {
    this.desc = desc;
  }
}
