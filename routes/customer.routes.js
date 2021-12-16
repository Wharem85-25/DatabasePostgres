const express = require('express');

const CustomerService = require('../services/customer.service');
const validatorHandler = require('../middlewares/validator.handler')
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema} = require('../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const custom = await service.find()
    res.json(custom);
  } catch(err) {
    next(err);
  }
});

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', validatorHandler(createCustomerSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const newCustom = await service.create(body);
    res.status(201).json(newCustom);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id', validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      res.status(201).json(await service.update(id, body));
    } catch (err) {
      next(err);
    }
  });

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      res.status(200).json(await service.delete(id));
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
