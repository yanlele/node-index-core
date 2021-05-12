import { Browser, launch } from 'puppeteer';
import { handleCreatePage, initConfig } from './config';

const main = async () => {
  const browser: Browser = await launch(initConfig);

  const page = await handleCreatePage(browser);

  await page.goto('https://chaoshi.detail.tmall.com/item.htm?spm=a230r.1.14.1.a51f69515wmqTH&id=622154425076&ns=1&abbucket=13', {
    timeout: 5 * 60 * 1000,
  });

  await page.waitFor(5000);
  await browser.close();
};

main();
