// import { Browser, launch } from 'puppeteer';
// import { initConfig, userAgent } from './config';
import { load } from 'cheerio';
import { CheerioAPI } from 'cheerio/lib/cheerio';
import { readFileSync } from 'fs-extra';
import { trim } from 'lodash';
import handlePriceHelper from './helper/handlePriceHelper';

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
  const product_image_list: string[] = [];
  $('#J_UlThumb img').each((index, element: any) => {
    const mainImage = $(element).attr('src');
    const res = mainImage.replace(/[0-9][0-9]x[0-9][0-9]/, '400x400');
    product_image_list.push(res);
  });

  const product_detail_image_list: string[] = [];
  $('#description > div img').each((_, element: any) => {
    const productImage = $(element).attr('src');
    product_detail_image_list.push(productImage);
  });

  // 初始价格
  const original_cost = $('#J_StrPriceModBox')
    .find('.tm-price')
    .text();

  // 现在价格/折扣价
  const price = $('#J_PromoPrice')
    .find('.tm-price')
    .text();

  const category_id = 22; // todo

  const title = $('.tb-detail-hd')
    .find('h1')
    .text();

  const name = title;
  const desc = name;

  console.log({
    original_cost: handlePriceHelper(original_cost),
    price: handlePriceHelper(price) || handlePriceHelper(original_cost),
    category_id,
    title: trim(title),
    name: trim(name),
    desc: trim(desc),
  });

  // console.log('mainImageList: ', product_image_list);
  // console.log('productImageList: ', product_detail_image_list);
};

main();
