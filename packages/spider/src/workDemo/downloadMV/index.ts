import { Browser, launch, Page } from 'puppeteer';
import { handleCreatePage, initConfig } from '../../config';
import { downDetailUrl } from './main';
import { getDetailInfo } from './getDetailInfo';

const host = 'https://www.sohux8b.club/';

/**
 * 获取列表数据
 * @param page
 * @param startUrl
 */
const handleDownDetailUrlCallback = async (page: Page, startUrl) => {
  const nextUrl = await downDetailUrl(page, startUrl);

  if (nextUrl) {
    return await handleDownDetailUrlCallback(page, nextUrl);
  } else {
    return;
  }
};

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);
  const startUrl = `${host}forum-798-1.html`;

  try {
    // await handleDownDetailUrlCallback(page, startUrl);
    await getDetailInfo(page);
  } catch (e) {
    await browser.close();
  }

  await browser.close();
};

mainSpider();
