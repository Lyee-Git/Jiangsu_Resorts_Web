var sqlMap = {
    Rev: {
      add: 'insert into resort?(name,link,rating,date,review) values (?,?,?,?,?)',
      insert: 'insert into resort?(name,link,rating,date,review) values ?',
      show: 'select * from resort?',
      del: 'delete from resort? where name = ?',
      update: 'update resort? set link = ?,rating = ?,date = ?,review = ? where name = ?'
    }
  }
  
  module.exports = sqlMap