import { Browser, launch } from 'puppeteer';
import { resolve } from 'path';
import { readFileSync, writeFile } from 'fs';
import { load } from 'cheerio';
import { isString } from 'lodash';

import { handleCreatePage, initConfig } from '../../config';

const fileHtmlPath = resolve(__dirname, './tempDownload/tempDetail.html');

const host = 'https://www.sohux8b.club/';

const keyWords = ['公告通知', undefined, null];

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);

  await page.goto(`https://www.sohux8b.club/thread-13206942-1-1.html`, {
    timeout: 2 * 60 * 1000,
  });

  await page.waitFor(200);

  await page.waitForSelector('#ct');

  const htmlString: string = await page.evaluate(() => document.body.innerHTML);

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


    const a = $('a').filter((index, element) => {
      const href = $(element).attr('href');
      return isString(href) && (!href.includes('&nothumb=yes') && href.includes('forum.php?mod=attachment&aid='))
    });
    console.log(a.attr('href'))

  } catch (e) {
    console.log(e);
  }
};

main();
// mainSpider();
