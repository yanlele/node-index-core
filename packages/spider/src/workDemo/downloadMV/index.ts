import { Browser, launch } from 'puppeteer';
import { handleCreatePage, initConfig } from '../../config';
import { downDetailUrl } from './main';

const host = 'https://www.sohux8b.club/';

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);
  const startUrl = `${host}forum-798-328.html`;

  try {
    await downDetailUrl(page, startUrl);
  } catch (e) {
    await browser.close();
  }

  await browser.close();
};

mainSpider();
