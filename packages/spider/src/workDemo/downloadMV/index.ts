import { Browser, launch, Request } from 'puppeteer';
import { resolve } from 'path';

import * as UserAgent from 'user-agents';
import { readFileSync, writeFile } from 'fs';
import { load } from 'cheerio';

const userAgent = new UserAgent({
  deviceCategory: 'desktop',
}).toString();

const fileHtmlPath = resolve(__dirname, './tempDownload/tempFirstPage.html');

const host = 'https://www.sohux8b.club/';

const keyWords = ['公告通知', undefined, null];

const mainSpider = async () => {
  const browser: Browser = await launch({
    timeout: 15000, // 浏览器启动时间
    devtools: false,
    headless: false,
    slowMo: 50,
    defaultViewport: {
      width: 1400,
      height: 800,
    },
  });

  const page = await browser.newPage();
  await page.setUserAgent(userAgent);

  // 过滤图片和css 文件
  await page.setRequestInterception(true);
  await page.on('request', async (interceptedRequest: Request) => {
    if (
      interceptedRequest.url().includes('.png') ||
      interceptedRequest.url().includes('.jpg') ||
      interceptedRequest.url().includes('.gif') ||
      interceptedRequest.url().includes('.css') ||
      interceptedRequest.url().includes('.js')
    ) {
      await interceptedRequest.abort();
    } else {
      await interceptedRequest.continue();
    }
  });

  await page.goto(`${host}forum-798-1.html`, {
    timeout: 60 * 1000,
  });

  await page.waitForSelector('#threadlisttableid');

  const htmlString: string = await page.evaluate(() => document.body.innerHTML);
  console.log(htmlString);

  writeFile(
    fileHtmlPath,
    htmlString,
    {
      encoding: 'utf8',
    },
    () => console.log('write file success'),
  );

  await browser.close();
};

const main = () => {
  let fileData = '';
  try {
    fileData = readFileSync(fileHtmlPath, 'utf8');
    const $: CheerioStatic = load(fileData);
    const tableList = $('#threadlisttableid');
    tableList.find('tbody').each((index, element) => {
      const keyWord = $(element)
        .find('tr:nth-child(1) > th > em > a')
        .text();

      if (keyWord && !keyWords.includes(keyWord)) {
        const getCurrentTr = $(element).find('tr:nth-child(1) > th');
        const currentTarget = getCurrentTr.find('a.xst');

        console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
        console.log(keyWord);
        console.log(currentTarget.text());
        console.log(`${host}${currentTarget.attr('href')}`);
        console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
      }
    });
  } catch (e) {
    mainSpider();
  }
};

main();
