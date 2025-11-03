const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
});

// CREATE product
router.post('/', async (req, res) => {
  try {
    const { name, description = '', price = 0, stock = 0 } = req.body || {};
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const product = new Product({ name, description, price, stock });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    console.log('add product ',err);
    res.status(400).json({ error: err.message || 'Validation error' });
  }
});

// REPLACE product
router.put('/:id', async (req, res) => {
  try {
    const { name, description = '', price = 0, stock = 0 } = req.body || {};
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    product.name = name;
    product.description = description;
    product.price = price;
    product.stock = stock;
    await product.save();

    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message || 'Invalid id' });
  }
});

// PARTIAL update product
router.patch('/:id', async (req, res) => {
  try {
    const updates = req.body || {};
    const product = await Product.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message || 'Invalid id' });
  }
});

// DELETE product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ error: 'Invalid id' });
  }
});

module.exports = router;
