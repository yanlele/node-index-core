import { Browser, launch, Page, Request } from 'puppeteer';
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
          console.log();
          console.log('index: ', index + 1);
          console.log(
            'title: ',
            $(element)
              .find('dt > div > a:nth-child(1)')
              .text(),
          );
          console.log(
            'url: ',
            $(element)
              .find('dt > div > a:nth-child(1)')
              .attr('href'),
          );
          console.log(
            'type: ',
            $(element)
              .find('dt > span.flag_icon')
              .text(),
          );
          console.log('------------------------------');
        }
      });
    } catch (e) {
      this.main();
    }
  }

  async main() {
    this.browser = await launch({
      timeout: 15000, // 浏览器启动时间
      devtools: false,
      headless: true,
      slowMo: 100,
      defaultViewport: {
        width: 1100,
        height: 680,
      },
    });

    this.page = await this.browser.newPage();
    await this.page.setUserAgent(this.userAgent);

    /*
     * 开启请求拦击， 以为有写请求会直接 阻塞
     * 让浏览器误认为没有加载完成
     * */
    await this.page.setRequestInterception(true);
    this.page.on('request', async (interceptedRequest: Request) => {
      if (
        interceptedRequest.url().endsWith('.png') ||
        interceptedRequest.url().endsWith('.jpg') ||
        interceptedRequest.url().includes('/o.htm') ||
        interceptedRequest.url().includes('/s.htm')
      ) {
        await interceptedRequest.abort();
      } else {
        await interceptedRequest.continue();
      }
    });
    await this.goPage(1);
    await this.browser.close();
    this.file();
  }

  async goPage(pageSize: number, search: string = 'jest') {
    await this.page.goto(`${this.host}/so/search/s.do?p=${pageSize}&q=${search}`);
    await this.page.waitForSelector('.main-container');
    await this.page.waitFor(100);
    const htmlString: string = await this.page.evaluate(() => document.body.innerHTML);
    writeFile(
      this.filePath,
      htmlString,
      {
        encoding: 'utf8',
        flag: 'a',
      },
      () => console.log(`search page index: ${pageSize} - write file success`),
    );

    const $: CheerioStatic = load(htmlString);
    const $next = $('div.csdn-pagination.hide-set > span > a.btn.btn-xs.btn-default.btn-next').length;
    if (pageSize >= 10) return;
    if ($next) {
      await this.goPage(++pageSize);
    }
  }
}

const page: CSDNPage = new CSDNPage();
page.file();
