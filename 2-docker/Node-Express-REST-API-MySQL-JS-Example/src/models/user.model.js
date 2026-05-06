const pool = require('../databases/mysql.db');

class User {
  constructor(firstName, lastName, age = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(firstName) {
    if (!firstName) throw new Error('Invalid first name value.');
    firstName = firstName.trim();
    if (firstName === '') throw new Error('Invalid first name value.');
    this._firstName = firstName;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(lastName) {
    if (!lastName) throw new Error('Invalid last name value.');
    lastName = lastName.trim();
    if (lastName === '') throw new Error('Invalid last name value.');
    this._lastName = lastName;
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (age < 0) throw new Error('Invalid age value.');
    this._age = age;
  }

  //  INSERT
  async save() {
    const sql = `
      INSERT INTO users (id, first_name, last_name, age)
      VALUES (UUID(), ?, ?, ?)
    `;
    await pool.execute(sql, [this.firstName, this.lastName, this.age]);
  }

  // SELECT
  static async find() {
    const sql = 'SELECT * FROM users';
    const [rows] = await pool.execute(sql);
    return rows;
  }

  //  UPDATE
  static async findByIdAndUpdate(id, options) {
    const sql = `
      UPDATE users
      SET first_name = ?, last_name = ?, age = ?
      WHERE id = ?
    `;
    await pool.execute(sql, [
      options.firstName,
      options.lastName,
      options.age,
      id
    ]);
  }

  //  DELETE
  static async findByIdAndDelete(id) {
    const sql = 'DELETE FROM users WHERE id = ?';
    await pool.execute(sql, [id]);
  }
}

module.exports = User;
