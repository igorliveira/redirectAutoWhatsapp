const db = require('../database')
const contacts = ['5511994696632', '5513996600208'];

class Repository {
    async findAll(orderBy = 'ASC') {
      const rows = await db.query(
        `SELECT * FROM contatos`,
      );
      return rows;
    }

    async findContact(contact) {
      const rows = await db.query(
      'SELECT * FROM contatos WHERE contato = $1', [
      contact,
      ])
      return rows;
    }

    async addContact(contact) {
      const [row] = await db.query(
      `INSERT INTO contatos (contato)
      VALUES($1)
      RETURNING *`, [
      contact
      ]);
      return row;
    }

    async deleteContact(contact) {
      const [row] = await db.query(
      'DELETE FROM contatos WHERE contato = $1', [
      contact
      ]);
      return row;
    }
}
module.exports = new Repository();

//const contacts = ['https://api.whatsapp.com/send?phone=5511994696632', 
//'https://api.whatsapp.com/send?phone=5513996600208'];
