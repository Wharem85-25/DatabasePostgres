const boom = require('@hapi/boom');
// const getConnection = require ('../libs/postgres');
// const pool = require('../libs/postgres.pool');
const  Sequelize  = require('./../libs/sequelize');
const models = Sequelize.sequelize.models
class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error',(err) => console.error(err) )
  }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const res = await models.User.findAll({
      include: ['customer']
    });
    return res;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const res = await user.update(changes);
    return res;
  }

  async delete(id) {
    const user = await this.findOne(id);;
    await user.destroy();
    return { id }
  }
}

module.exports = UserService;
