const express = require('express');
// const ProductsService = require('../services/product.service');

const router = express.Router();
// const service = new ProductsService();

router.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
});

module.exports = router;
