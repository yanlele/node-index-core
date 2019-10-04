import { launch } from 'puppeteer';
import * as UserAgent from 'user-agents';

const userAgent = new UserAgent();

const run = async () => {
  const browser = await launch({
    timeout: 15000,
    ignoreHTTPSErrors: false,
    devtools: false,
    headless: false,
    slowMo: 100,
  });

  const page = await browser.newPage();
  await page.setUserAgent(userAgent.toString());
  await page.goto('https://www.baidu.com/');
  await page.waitForSelector('#kw');
  await page.type('#kw', 'puppeteer');
  await page.click('#su');
  await page.waitFor(1000);
  const targetLink = await page.evaluate(() => {
    return document.querySelectorAll('.c-container a')[1].innerHTML;
  });
  console.log(targetLink);
  await page.waitFor(1000);
  await browser.close();
};

run();
