import { get } from 'lodash';

import { query } from '../../utils/mysql';

export interface RowItem {
  id: number;
  key_word: string;
  title: string;
  detail_url: string;
  download_url: string;
  look_over: number;
  reply: number;
}


const getDetailInfo = async () => {
  const row = await query(`select * from store where isnull(download_url) limit 1`, []);

  const currentRowInfo: RowItem = get(row, 0, {});

  const detailUrl = currentRowInfo.detail_url;

  console.log(detailUrl);
};

getDetailInfo();
