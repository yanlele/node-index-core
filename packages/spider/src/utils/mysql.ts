import { createPool } from 'mysql';

const pool = createPool({
  host: '192.168.205.10',
  database: 'spider1',
  user: 'root',
  password: '123456'
});

export const query = (sql, values) => new Promise((resolve, reject) => {
  pool.getConnection(function (err, connection) {
    if (err) {
      resolve(err)
    } else {
      connection.query(sql, values, (err, rows) => {

        if (err) {
          reject(err)
        } else {
          resolve(rows)
        }
        connection.release()
      })
    }
  })
});




