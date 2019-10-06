import { Browser, launch } from 'puppeteer';
import { resolve } from 'path';
import { readFileSync, writeFile } from 'fs';
import { load } from 'cheerio';
import { handleCreatePage, initConfig } from '../../config';

const fileHtmlPath = resolve(__dirname, './tempDownload/tempFirstPage.html');

const host = 'https://www.sohux8b.club/';

const keyWords = ['公告通知', undefined, null];

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);

  await page.goto(`${host}forum-798-1.html`, {
    timeout: 2 * 60 * 1000,
  });

  await page.waitFor(200);

  await page.waitForSelector('#threadlisttableid');

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

    // console.log(`${host}${$('#fd_page_top > div > a.nxt').attr('href')}`);
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
