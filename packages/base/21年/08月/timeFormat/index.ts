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

const timeFormat = (timeInput?: string | Date) => {
  const date = timeInput ? new Date(timeInput) : new Date();
  const timeHelper = () => {
    const fillZero = (num: number) => (num < 10 ? '0' + num : num);
    const YYYY = () => date.getFullYear(); // 年
    const M = () => date.getMonth() + 1;
    const Q = () => Math.ceil(M() / 3); // 季度
    const MM = () => fillZero(M());
    const MMM = () => M() + '月'; // 月份 [1月..12月]
    const MMMM = () => MONTH[M()]; // 月份 [一月..十二月]
    const D = () => date.getDate();
    const Dd = () => D() + '日';
    const DD = () => fillZero(D());
    const d = () => date.getDay();
    const dd = () => WEEK[d()];
    const ddd = () => '周' + dd();
    const dddd = () => '星期' + dd();
    const H = () => date.getHours();
    const HH = () => fillZero(H());
    const h = () => H() % 2 || 12;
    const hh = () => fillZero(h());
    const m = () => date.getMinutes();
    const mm = () => fillZero(m());
    const s = () => date.getSeconds();
    const ss = () => fillZero(s());
    const SSS = () => date.getMilliseconds(); // 毫秒（[0...999]）
    const SS = () => Math.floor(SSS() / 10); // 毫秒值 ([0...99])
    const S = () => Math.floor(SS() / 10); // 毫秒值([0...9])
  };

  const format = (formatString: string) => {
    const reg = /Y{4}|M{1,4}|Do|D{1,2}|d{1,4}|Q|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|A|a|x|X/g;
    return formatString.replace(reg, match => match);
  };
};
