import { Browser, launch } from 'puppeteer';
import { handleCreatePage, initConfig } from '../../config';
import { downDetailUrl } from './main';

const host = 'https://www.sohux8b.club/';

const mainSpider = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);
  const startUrl = `${host}forum-798-1.html`;

  await downDetailUrl(page, startUrl);

  await browser.close();
};

mainSpider();
