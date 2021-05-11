import { launch, Page } from 'puppeteer';

const run = async (): Promise<void> => {
  const browser = await launch({
    timeout: 15000,
    ignoreHTTPSErrors: true,
    devtools: false,
    headless: false,
    slowMo: 100,
  });
  const page: Page = await browser.newPage();
  await page.goto('https://github.com');
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
      href: window.location.href,
    };
  });

  console.log('dimensions', dimensions);
  await browser.close();
};

run();
