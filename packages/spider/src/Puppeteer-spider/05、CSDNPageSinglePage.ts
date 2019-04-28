import { Browser, launch, Page } from 'puppeteer';
import * as UserAgent from 'user-agents';
import { load } from 'cheerio';
import { writeFile, readFileSync } from 'fs';
import { resolve } from 'path';

class CSDNPage {
  private page: Page;
  private browser: Browser;
  private readonly userAgent: string;
  private readonly filePath: string;
  private readonly host: string;

  constructor() {
    this.page = null;
    this.browser = null;
    this.host = 'https://so.csdn.net';
    this.filePath = resolve(__dirname, './csdnPage.html');
    this.userAgent = new UserAgent({
      deviceCategory: 'desktop',
    }).toString();
  }

  file() {
    let fileData = '';
    try {
      fileData = readFileSync(this.filePath, 'utf8');
      const $: CheerioStatic = load(fileData);
      const dlList = $('div.main-container > div.con-l > div.search-list-con > dl');
      dlList.each((index, element) => {
        if (
          $(element)
            .find('dt > span.flag_icon')
            .text() === '博客'
        ) {
          console.log(
            'title',
            $(element)
              .find('dt > div > a:nth-child(1)')
              .text(),
          );
          console.log(
            'url',
            $(element)
              .find('dt > div > a:nth-child(1)')
              .attr('href'),
          );
          console.log(
            'span',
            $(element)
              .find('dt > span.flag_icon')
              .text(),
          );
        }
      });
    } catch (e) {
      this.main();
    }
  }

  async main() {
    this.browser = await launch({
      timeout: 15000,
      ignoreHTTPSErrors: true,
      devtools: false,
      headless: false,
      slowMo: 100,
      defaultViewport: {
        width: 1100,
        height: 680,
      },
    });

    this.page = await this.browser.newPage();
    await this.page.setUserAgent(this.userAgent);
    await this.page.goto(`${this.host}/so/search/s.do?p=2&q=electron&t=&domain=&o=&s=&u=&l=&f=`);
    await this.page.waitForSelector('.main-container');
    await this.page.waitFor(100);
    console.log(1);
    const htmlString: string = await this.page.evaluate(() => document.body.innerHTML);
    writeFile(
      this.filePath,
      htmlString,
      {
        encoding: 'utf8',
      },
      () => console.log('write file success'),
    );
    await this.browser.close();
  }
}

const page: CSDNPage = new CSDNPage();
page.file();
