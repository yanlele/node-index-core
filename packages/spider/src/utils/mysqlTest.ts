import { pool, query } from './mysql';
import { RowItem } from '../workDemo/downloadMV/getDetailInfo';


query(`select * from store where isnull(download_url) limit 1`, []).then((res: RowItem[]) => {
  res.map(item => {
    console.log(item);
    console.log(item.detail_url)
  });

  pool.end();
});

