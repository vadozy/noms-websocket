const Sybase = require('sybase');
const promisify = require('util').promisify;


module.exports = () => {
  
  const db = new Sybase('pbosdbnums61', 5550, 'oms', 'ni', 'password');

  console.log('Starting.Sybase connection ...');

  const connect = promisify((db.connect.bind(db)));
  const query = promisify((db.query.bind(db)));

  const sql = `
  select
      symbol, 
      currency,
      pclose as 'close',
      open_price as 'open',
      price,
      vwap
  from rt_price 
  where 
      currency = 'USD'
      and len(symbol) < 7
      and price > 0
      and vwap > 0
  order by symbol
  `

  return connect()
    .then(_ => {
      // return query("select * from ni_exchange where code = 'NYS'");
      return query(sql);
    })
    .then(data => {
      //console.log(data);
      db.disconnect();
      return data;
    })
    .catch(err => {
      console.error(err);
    });

};