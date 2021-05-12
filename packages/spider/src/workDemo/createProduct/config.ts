// import { Request } from 'puppeteer';
import UserAgent from './getUserAgent';

// @ts-ignore
export const userAgent = new UserAgent({
  deviceCategory: 'desktop',
}).toString();

export const initConfig = {
  timeout: 15000, // 浏览器启动时间
  devtools: false,
  headless: false,
  slowMo: 50,
  defaultViewport: {
    width: 1400,
    height: 800,
  },
};

export const handleCreatePage = async (browser: any) => {
  const page = await browser.newPage();
  await page.setUserAgent(userAgent);

  // // 过滤图片和css 文件
  // await page.setRequestInterception(true);
  // await page.on('request', async (interceptedRequest: Request) => {
  //   const url = interceptedRequest.url();
  //   if (url.includes('forum.php?') || url.includes('.html')) {
  //     await interceptedRequest.continue();
  //   } else {
  //     await interceptedRequest.abort();
  //     // await interceptedRequest.respond({
  //     //   status: 404,
  //     //   contentType: 'text/plain',
  //     //   body: 'Not Found!',
  //     // });
  //   }
  // });

  return page;
};
