import { get, isEmpty, isString } from 'lodash';
import { Page } from 'puppeteer';
import { load } from 'cheerio';
import { query } from '../../utils/mysql';

import { host } from './index';
import { tco } from './utils';

export interface RowItem {
  id: number;
  key_word: string;
  title: string;
  detail_url: string;
  download_url: string;
  look_over: number;
  reply: number;
}

let timer = 0;

export const getDetailInfoUrl = async () => {
  const row = await query(`select * from store where isnull(download_url) or download_url = '' limit 1`, []);

  const currentRowInfo: RowItem = get(row, 0, {});

  return currentRowInfo;
};

export const getDetailInfo = tco(async (page: Page) => {
  const info: RowItem = await getDetailInfoUrl();
  timer++;
  console.log('timer - ', timer);

  if (!info.detail_url) return;

  try {
    await page.goto(info.detail_url, {
      timeout: 5 * 60 * 1000,
    });
    await page.waitFor(500);

    await page.waitForSelector('#ct');
    const htmlString: string = await page.evaluate(() => document.body.innerHTML);

    const $: CheerioStatic = load(htmlString);

    const lookOver = $('#postlist > table:nth-child(1) > tbody > tr > td.pls.ptn.pbn > div > span:nth-child(2)').text();
    const reply = $('#postlist > table:nth-child(1) > tbody > tr > td.pls.ptn.pbn > div > span:nth-child(5)').text();

    const a = $('a').filter((index, element) => {
      const href = $(element).attr('href');
      return isString(href) && (!href.includes('&nothumb=yes') && href.includes('forum.php?mod=attachment&aid='));
    });

    const downloadUrl = a.attr('href') ? `${host}${a.attr('href')}` : '-';

    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
    console.log('info: ', info);
    console.log('阅读量 - lookOver： ', lookOver);
    console.log('回复量 - reply： ', reply);
    console.log('下载链接： ', downloadUrl);
    console.log(`<${'='.repeat(50)}${'='.repeat(50)}>`);
    console.log();

    await query(`update store set look_over = ?, reply = ?, download_url = ? where id = ?`, [
      lookOver,
      reply,
      downloadUrl,
      info.id,
    ]);
  } catch (e) {
    console.log(e);
  }

  return await getDetailInfo(page);
});
