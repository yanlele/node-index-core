// import { Browser, launch } from 'puppeteer';
// import { initConfig, userAgent } from './config';
import { load } from 'cheerio';
import { CheerioAPI } from 'cheerio/lib/cheerio';
import { readFileSync } from 'fs-extra';

const main = (): void => {
  // const browser: Browser = await launch(initConfig);
  //
  // const page = await browser.newPage();
  // // await page.setUserAgent(userAgent);
  //
  // await page.goto('https://chaoshi.detail.tmall.com/item.htm?spm=a230r.1.14.1.a51f69515wmqTH&id=622154425076&ns=1&abbucket=13', {
  //   timeout: 5 * 60 * 1000,
  // });
  //
  // await page.waitFor(500);
  // await page.waitForSelector('body > div.sufei-dialog');
  //
  // // "#description > div"
  // const divHandle = await page.$('body > div.sufei-dialog');
  // await page.evaluate((el, value) => el.setAttribute('style', value), divHandle, 'display: none');
  //
  // const htmlString: string = await page.evaluate(() => document.body.innerHTML);

  // async function scrollPage(i) {
  //   const content = await page.content();
  //   const $ = load(content);
  //   /*执行js代码（滚动页面）*/
  //   await page.evaluate(function() {
  //     /* 这里做的是渐进滚动，如果一次性滚动则不会触发获取新数据的监听 */
  //     for (let y = 0; y <= 1000 * i; y += 100) {
  //       window.scrollTo(0, y);
  //     }
  //   });
  // }

  const htmlString = readFileSync('./demo.html', { encoding: 'utf-8' });
  const $: CheerioAPI = load(htmlString);
  const mainImageList: string[] = [];
  $('#J_UlThumb img').each((index, element: any) => {
    const mainImage = $(element).attr('src');
    const res = mainImage.replace(/[0-9][0-9]x[0-9][0-9]/, '400x400');
    mainImageList.push(res);
  });

  const productImageList: string[] = [];
  $('#description > div img').each((_, element: any) => {
    const productImage = $(element).attr('src');
    productImageList.push(productImage);
  });

  console.log('mainImageList: ', mainImageList);
  console.log('productImageList: ', productImageList);
};

main();
