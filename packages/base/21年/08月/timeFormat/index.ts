const MONTH = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
const WEEK = ['日', '一', '二', '三', '四', '五', '六'];
// 单位大小
const UNIT = {
  d: 86400000, // 毫秒/天
  H: 3600000, // 毫秒/小时
  m: 60000, // 毫秒/分钟
  s: 1000, // 毫秒/秒
  S: 1, // 毫秒
};

const timeFormat = () => {
  console.log(MONTH);
  console.log(WEEK);
  console.log(UNIT);
  console.log('123');
};

timeFormat();
