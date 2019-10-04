import { Browser, launch } from 'puppeteer';
import * as UserAgent from 'user-agents';

const userAgent = new UserAgent({
  deviceCategory: 'desktop',
}).toString();

const main = async () => {
  const browser: Browser = await launch({
    timeout: 15000, // 浏览器启动时间
    devtools: false,
    headless: false,
    slowMo: 50,
    defaultViewport: {
      width: 1400,
      height: 800,
    },
  });

  const page = await browser.newPage();
  await page.setUserAgent(userAgent);

  await this.page.setRequestInterception(true);
};
