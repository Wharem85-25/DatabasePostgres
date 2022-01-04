const express = require('express');
const passport = require('passport');

const OrderService = require('../services/order.service');
const validatorHandler = require('../middlewares/validator.handler')
const { createOrderSchema, getOrderSchema, addItemSchema} = require('../schemas/order.schema');

const router = express.Router();
const service = new OrderService();

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const order = await service.findOne(id);
      res.json(order);
    } catch (err) {
      next(err);
  }
});

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = { userId: req.user.sub };
      const newProduct = await service.create(body);
      res.status(201).json(newProduct);
    } catch(err) {
      next(err);
    }
})

router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newItem = await service.addItem(body);
      res.status(201).json(newItem);
    } catch(err) {
      next(err);
    }
})

module.exports = router;
