import { Page } from 'puppeteer';
import { load } from 'cheerio';
import { query } from '../../utils/mysql';

const host = 'https://www.sohux8b.club/';

const keyWords = ['公告通知', undefined, null];

let timer = 0;
export const downDetailUrl = async (page: Page, url) => {
  timer++;

  console.log(`<${'='.repeat(50)}开始${'='.repeat(50)}>`);
  console.log('开始跳转页面： ', url);
  await page.goto(url, {
    timeout: 10 * 60 * 1000,
  });

  console.log('跳转页面成功');
  await page.waitFor(1000);

  await page.waitForSelector('#threadlisttableid');

  const htmlString: string = await page.evaluate(() => document.body.innerHTML);

  const $: CheerioStatic = load(htmlString);
  const tableList = $('#threadlisttableid');

  await tableList.find('tbody').each(async (index, element) => {
    const keyWord = $(element)
      .find('tr:nth-child(1) > th > em > a')
      .text();

    if (keyWord && !keyWords.includes(keyWord)) {
      const getCurrentTr = $(element).find('tr:nth-child(1) > th');
      const currentTarget = getCurrentTr.find('a.xst');

      await query(`insert into store set ?`, {
        key_word: keyWord,
        title: currentTarget.text(),
        detail_url: `${host}${currentTarget.attr('href')}`,
      });
    }
  });
  console.log('保存数据成功');
  console.log(`<${'='.repeat(50)}当前这条信息结束${'='.repeat(50)}>`);
  console.log();

  const nextUrl = `${host}${$('#fd_page_top > div > a.nxt').attr('href')}`;

  if (timer >= 125) {
    return nextUrl;
  }

  if (nextUrl) {
    return  await downDetailUrl(page, nextUrl);
  } else {
    return;
  }
};
