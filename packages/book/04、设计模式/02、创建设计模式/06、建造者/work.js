'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var Human = (function() {
  function Human(_a) {
    var _b = _a.params,
      params = _b === void 0 ? { skill: '保密', hobby: '保密' } : _b;
    this.skill = params.skill;
    this.hobby = params.hobby;
  }
  Human.prototype.getSkill = function() {
    return this.skill;
  };
  Human.prototype.getHobby = function() {
    return this.hobby;
  };
  return Human;
})();
exports.Human = Human;
var Named = (function() {
  function Named(name) {
    this.whileName = name;
    if (name.indexOf(' ') > -1) {
      this.firstName = name.slice(0, name.indexOf(' '));
      this.secondName = name.slice(name.indexOf(' ') + 1);
    }
  }
  return Named;
})();
exports.Named = Named;
var Work = (function() {
  function Work(word) {
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
  Work.prototype.changeWork = function(work) {
    this.work = work;
  };
  Work.prototype.changeDesc = function(desc) {
    this.desc = desc;
  };
  return Work;
})();
exports.Work = Work;
//# sourceMappingURL=work.js.map
