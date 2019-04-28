import { load } from 'cheerio';
import { writeFile } from 'fs';
import { resolve } from 'path';
import { launch, Page } from 'puppeteer';
import * as UserAgent from 'user-agents';

const userAgent = new UserAgent();

interface NewInterface {
  title: string;
  href: string;
}

const localNews: NewInterface[] = [];
const hotNews: NewInterface[] = [];

const main = async () => {
  const browser = await launch({
    timeout: 15000,
    headless: true,
    devtools: false,
    slowMo: 100,
    ignoreHTTPSErrors: true,
  });
  const page: Page = await browser.newPage();
  await page.setUserAgent(userAgent.toString());
  await page.goto('http://news.baidu.com/');
  await page.waitForSelector('div#local_news');
  const htmlStr: string = await page.evaluate(() => document.body.innerHTML);
  const $ = load(htmlStr);
  // 本地新闻
  $('ul#localnews-focus li a').each((index, item) => {
    const news: NewInterface = {
      title: $(item).text(),
      href: $(item).attr('href'),
    };
    localNews.push(news);
  });

  // 本地咨询
  $('div#localnews-zixun ul li a').each((index, item) => {
    const news: NewInterface = {
      title: $(item).text(),
      href: $(item).attr('href'),
    };
    localNews.push(news);
  });

  // 热点新闻
  $('div#pane-news ul li a').each((idx, ele) => {
    const news: NewInterface = {
      title: $(ele).text(), // 获取新闻标题
      href: $(ele).attr('href'), // 获取新闻网页链接
    };
    hotNews.push(news); // 存入最终结果数组
  });

  console.log('hotNews', hotNews);
  console.log('localNews', localNews);

  writeFile(
    resolve(__dirname, 'news.json'),
    JSON.stringify(
      {
        hotNews,
        localNews,
      },
      undefined,
      4,
    ),
    'utf8',
    () => {
      console.log('文件保存成功');
    },
  );

  await browser.close();
};

main();
