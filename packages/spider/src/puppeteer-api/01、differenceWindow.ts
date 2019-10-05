import { Browser, launch } from 'puppeteer';
import { initConfig } from '../config';

const main = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await browser.newPage();
  await page.goto('https://juejin.im/');

  //打开掘进首页，点击第一个文章链接
  await page.waitFor(3000);

  await page.waitForSelector(
    '#juejin > div.view-container > main > div > div > div.feed.welcome__feed > ul > li:nth-child(1) > div > div > a > div > div > div.info-row.title-row > a',
  );
  await page.click(
    '#juejin > div.view-container > main > div > div > div.feed.welcome__feed > ul > li:nth-child(1) > div > div > a > div > div > div.info-row.title-row > a',
  );

  //跳转到第二个窗口输入文字
  await page.waitFor(3000); //等待3秒，等待新窗口打开
  const page2 = (await browser.pages())[2]; //得到所有窗口使用列表索引得到新的窗口
  await page2.setViewport({ width: 1280, height: 800 });
  await page2.waitFor('.search-input');
  await page2.type('.search-input', 'succeed'); //在新窗口中输入文字
  const title = await page2.title(); //得到新窗口的标题
  await page2.close();
  console.log(title); //打印新窗口的标题

  await page.waitFor(3000);
  await browser.close();
};

main();
