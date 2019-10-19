import { Browser, launch, Page } from 'puppeteer';
import { handleCreatePage, initConfig } from '../../config';
import { downDetailUrl } from './main';
import { getDetailInfo } from './getDetailInfo';
import { pool } from '../../utils/mysql';

export const host = 'https://www.sohux8b.club/';
// const startUrl = `${host}forum-798-1.html`; // 开始链接

/**
 * 获取列表数据
 * @param page
 * @param startUrl
 */
// const handleDownDetailUrlCallback = async (page: Page, startUrl) => {
//   const nextUrl = await downDetailUrl(page, startUrl);
//
//   if (nextUrl) {
//     return await handleDownDetailUrlCallback(page, nextUrl);
//   } else {
//     return;
//   }
// };

// const handleGetDetailInfoCallback = async (page: Page) => {
//   const nextUrl = await getDetailInfo(page);
//
//   if (nextUrl) {
//     return await handleGetDetailInfoCallback(page);
//   } else {
//     return;
//   }
// };

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);

  try {
    // await handleDownDetailUrlCallback(page, startUrl);

    // 拿到详情页面的数据信息
    await getDetailInfo(page);
    console.log('end');
  } catch (e) {
    await browser.close();
  }
  pool.end();
  await browser.close();
};

mainSpider();
