const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hello word');
})

app.get('/new-route', (req, res) => {
  res.send('new route');
})

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for(let i =0; i< limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('I am a product')
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id,
    name: 'product 1',
    price: 100
  });
});

app.get('/categories/:categoryId/products/:productsId', (req, res) => {
  const { categoryId, productsId } = req.params;
  res.json(
    {
    categoryId,
    productsId,
  });
})

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("Do not params");
  }
})

app.listen(port, () => {
  console.log('Port ' + port);
});
