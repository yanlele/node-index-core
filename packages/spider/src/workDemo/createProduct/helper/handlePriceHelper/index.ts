import { split, includes } from 'lodash';

const handlePriceHelper = (price: string) => {
  if (!price) return 0;
  if (includes(price, '-')) {
    const firstPrice = split(price, '-')[0];
    return parseInt(firstPrice, 10);
  }

  return parseInt(price, 10);
};

export default handlePriceHelper;
