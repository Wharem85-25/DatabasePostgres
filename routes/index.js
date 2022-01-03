const express = require('express');
const productsRouter = require('./products.routes');
const usersRouter = require('./users.routes');
const categoriesRouter = require('./categorys.routes');
const orderRouter = require('./orders.routes');
const customerRouter = require('./customer.routes');
const authRouter = require('./auth.routes');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', orderRouter);
  router.use('/customer', customerRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
