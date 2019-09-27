const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Product = require('./models/product');
// const { products } = require('./data');

mongoose.connect('mongodb://localhost:27017/online-store', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to db server successfully.');
  })
  .catch((error) => {
    console.log('DB server connection failed.', error);
  });

const app = express();

const log = (req, res, next) => {
  console.log(`log() - Method: ${req.method} - Path: ${req.path}`);
  next();
};

console.log('begin');

app.use(log);
app.use(morgan('tiny'));
app.use(express.json());

// http://localhost:3000/ - Welcome message
app.get('/', (req, res) => {
  res.write('<h1>Welcome to Online Store App API</h1>');
  res.end();
});

// http://localhost:3000/api/products - Add a new product
app.post('/api/products', (req, res) => {
  console.log('request body:', req.body);
  const product = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category
  });
  product.save()
    .then(product => {
      res.status(201).send(product);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

// http://localhost:3000/api/products - Get all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find()
      .select('-__v');

    res.json(products);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// http://localhost:3000/api/products/1 - Get a single product
app.get('/api/products/:id', async (req, res) => {
  try {
    // const product = await Product.findOne({ _id: req.params.id })
    const product = await Product.findById(req.params.id)
      .select('-__v');

    if (!product) {
      return res.status(404).json({ message: 'Product not found!' });
    }

    res.json(product);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Online store app server started, listening on port ${port}`);
})

console.log('end');
