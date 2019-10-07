import { Browser, launch, Page } from 'puppeteer';
import { handleCreatePage, initConfig } from '../../config';
import { downDetailUrl } from './main';

const host = 'https://www.sohux8b.club/';

const handleCallback = async (page: Page, startUrl) => {
  const { page: currentPage, nextUrl } = await downDetailUrl(page, startUrl);

  if (currentPage  && nextUrl) {
    await handleCallback(currentPage, nextUrl);
  } else {
    return;
  }
};

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);
  const startUrl = `${host}forum-798-789.html`;

  try {
    await handleCallback(page, startUrl);

  } catch (e) {
    await browser.close();
  }

  await browser.close();
};

mainSpider();
