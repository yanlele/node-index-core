import { pool, query } from './mysql';

interface RowItem {
  id: number;
  key_word: string;
  title: string;
  detail_url: string;
  download_url: string;
  look_over: number;
  reply: number;
}

query(`select * from store where id = ?`, [1]).then((res: RowItem[]) => {
  res.map(item => {
    console.log(item);
    console.log(item.detail_url)
  });

  pool.end();
});

