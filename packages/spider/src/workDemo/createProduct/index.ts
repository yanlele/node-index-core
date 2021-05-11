import { Browser, launch } from 'puppeteer';
import { initConfig } from '../../config';

const main = async () => {
  const browser: Browser = await launch(initConfig);
};
