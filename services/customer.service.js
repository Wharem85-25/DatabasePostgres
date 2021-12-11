const boom = require('@hapi/boom');
const Sequelize  = require('./../libs/sequelize');
const models = Sequelize.sequelize.models

class CustomerService {
  constructor() {}

  async create(data) {
    const newCustomer = await models.Customer.create(data, {
      include: ['user']
    });
    return newCustomer;
  }

  async find() {
    const res = await models.Customer.findAll({
      include: ['user']
    });
    return res;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if(!customer) {
      throw boom.notFound('customer not found');
    }
    return customer;
  }


  async update(id, changes) {
    const model = await this.findOne(id);
    const res = await model.update(changes);
    return res;
  }

  async delete(id) {
    const model = await this. findOne(id);
    await model.destroy();
    return {
      res: true
    };
  }
}

module.exports = CustomerService;
