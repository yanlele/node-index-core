import { get } from 'lodash';

import { query } from '../../utils/mysql';
import { Page } from 'puppeteer';
import { load } from 'cheerio';

export interface RowItem {
  id: number;
  key_word: string;
  title: string;
  detail_url: string;
  download_url: string;
  look_over: number;
  reply: number;
}


export const getDetailInfoUrl = async () => {
  const row = await query(`select * from store where isnull(download_url) limit 1`, []);

  const currentRowInfo: RowItem = get(row, 0, {});

  return currentRowInfo.detail_url;
};

export const getDetailInfo = async (page: Page) => {
  const url = await getDetailInfoUrl();

  await page.goto(url);
  await page.waitFor(500);


  await page.waitForSelector('#ct');
  const htmlString: string = await page.evaluate(() => document.body.innerHTML);

  const $: CheerioStatic = load(htmlString);

  const lookOver = $('#postlist > table:nth-child(1) > tbody > tr > td.pls.ptn.pbn > div > span:nth-child(2)').text();
  const reply = $('#postlist > table:nth-child(1) > tbody > tr > td.pls.ptn.pbn > div > span:nth-child(5)').text();

  console.log(lookOver);
  console.log(reply);


};

