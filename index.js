const express = require('express');
const cors = require('cors'); 
const app = express();
require('dotenv').config();

app.use(cors());


const products = [
  { id: 1, name: 'Pro Wireless Headphones', price: 149.99, category: 'Headphones', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvJTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 2, name: 'Ultra HD 4K Monitor', price: 399.00, category: 'Monitors', rating: 5, imageUrl: 'path/to/image2.jpg' },
  { id: 3, name: 'Compact Bluetooth Speaker', price: 45.00, category: 'Speakers', rating: 4, imageUrl: 'path/to/image3.jpg' },
  { id: 4, name: 'Gaming Mechanical Keyboard', price: 89.99, category: 'Keyboards', rating: 5, imageUrl: 'path/to/image4.jpg' },
  { id: 5, name: 'Ergonomic Mouse', price: 25.50, category: 'Accessories', rating: 4, imageUrl: 'path/to/image5.jpg' },
  { id: 6, name: 'Portable Power Bank', price: 35.00, category: 'Accessories', rating: 3, imageUrl: 'path/to/image6.jpg' },
  { id: 7, name: 'Noise Cancelling Earbuds', price: 79.99, category: 'Headphones', rating: 5, imageUrl: 'path/to/image7.jpg' },
  { id: 8, name: 'Webcam 1080p', price: 55.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image8.jpg' },
  { id: 9, name: 'Studio Over-Ear Headphones', price: 189.99, category: 'Headphones', rating: 5, imageUrl: 'path/to/image9.jpg' },
  { id: 10, name: 'Budget Wireless Headphones', price: 59.99, category: 'Headphones', rating: 3, imageUrl: 'path/to/image10.jpg' },
  { id: 11, name: 'Curved 27-inch Monitor', price: 329.00, category: 'Monitors', rating: 5, imageUrl: 'path/to/image11.jpg' },
  { id: 12, name: 'Full HD 24-inch Monitor', price: 149.00, category: 'Monitors', rating: 4, imageUrl: 'path/to/image12.jpg' },
  { id: 13, name: 'Mini Portable Speaker', price: 29.99, category: 'Speakers', rating: 4, imageUrl: 'path/to/image13.jpg' },
  { id: 14, name: 'Smart WiFi Speaker', price: 99.99, category: 'Speakers', rating: 5, imageUrl: 'path/to/image14.jpg' },
  { id: 15, name: 'RGB Gaming Keyboard', price: 79.00, category: 'Keyboards', rating: 5, imageUrl: 'path/to/image15.jpg' },
  { id: 16, name: 'Compact Office Keyboard', price: 39.00, category: 'Keyboards', rating: 4, imageUrl: 'path/to/image16.jpg' },
  { id: 17, name: 'Wireless Charging Pad', price: 19.99, category: 'Accessories', rating: 4, imageUrl: 'path/to/image17.jpg' },
  { id: 18, name: 'Adjustable Laptop Stand', price: 45.00, category: 'Accessories', rating: 5, imageUrl: 'path/to/image18.jpg' },
  { id: 19, name: 'Bluetooth Noise Cancelling Headphones', price: 129.99, category: 'Headphones', rating: 5, imageUrl: 'path/to/image19.jpg' },
  { id: 20, name: 'Studio Reference Monitor', price: 499.99, category: 'Monitors', rating: 5, imageUrl: 'path/to/image20.jpg' },
  { id: 21, name: 'Dual Bass Bluetooth Speaker', price: 65.00, category: 'Speakers', rating: 4, imageUrl: 'path/to/image21.jpg' },
  { id: 22, name: 'Silent Mechanical Keyboard', price: 95.00, category: 'Keyboards', rating: 4, imageUrl: 'path/to/image22.jpg' },
  { id: 23, name: 'Gaming Mouse Pad XL', price: 15.99, category: 'Accessories', rating: 5, imageUrl: 'path/to/image23.jpg' },
  { id: 24, name: 'Wireless Vertical Mouse', price: 32.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image24.jpg' },
  { id: 25, name: 'Classic Wired Headphones', price: 39.99, category: 'Headphones', rating: 3, imageUrl: 'path/to/image25.jpg' },
  { id: 26, name: '144Hz Gaming Monitor', price: 279.99, category: 'Monitors', rating: 5, imageUrl: 'path/to/image26.jpg' },
  { id: 27, name: '360° Surround Speaker', price: 119.00, category: 'Speakers', rating: 5, imageUrl: 'path/to/image27.jpg' },
  { id: 28, name: 'Wireless RGB Keyboard', price: 99.00, category: 'Keyboards', rating: 4, imageUrl: 'path/to/image28.jpg' },
  { id: 29, name: 'USB-C Hub 7-in-1', price: 49.00, category: 'Accessories', rating: 5, imageUrl: 'path/to/image29.jpg' },
  { id: 30, name: 'Cooling Pad for Laptop', price: 27.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image30.jpg' },
  { id: 31, name: 'Over-Ear Gaming Headphones', price: 99.00, category: 'Headphones', rating: 5, imageUrl: 'path/to/image31.jpg' },
  { id: 32, name: '5K Professional Monitor', price: 649.99, category: 'Monitors', rating: 5, imageUrl: 'path/to/image32.jpg' },
  { id: 33, name: 'Waterproof Bluetooth Speaker', price: 75.00, category: 'Speakers', rating: 5, imageUrl: 'path/to/image33.jpg' },
  { id: 34, name: 'Compact Mechanical Keyboard', price: 69.00, category: 'Keyboards', rating: 4, imageUrl: 'path/to/image34.jpg' },
  { id: 35, name: 'Smartphone Tripod Stand', price: 22.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image35.jpg' },
  { id: 36, name: 'USB LED Light Bar', price: 14.00, category: 'Accessories', rating: 3, imageUrl: 'path/to/image36.jpg' },
  { id: 37, name: 'Kids Wireless Headphones', price: 44.99, category: 'Headphones', rating: 4, imageUrl: 'path/to/image37.jpg' },
  { id: 38, name: 'Wide Screen Office Monitor', price: 259.00, category: 'Monitors', rating: 4, imageUrl: 'path/to/image38.jpg' },
  { id: 39, name: 'Smart Mini Speaker', price: 49.99, category: 'Speakers', rating: 4, imageUrl: 'path/to/image39.jpg' },
  { id: 40, name: 'Mechanical Keyboard with Wrist Rest', price: 109.00, category: 'Keyboards', rating: 5, imageUrl: 'path/to/image40.jpg' },
  { id: 41, name: 'Desk Organizer Set', price: 19.99, category: 'Accessories', rating: 5, imageUrl: 'path/to/image41.jpg' },
  { id: 42, name: 'Stylus Pen', price: 17.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image42.jpg' },
  { id: 43, name: 'ANC Over-Ear Headphones', price: 159.00, category: 'Headphones', rating: 5, imageUrl: 'path/to/image43.jpg' },
  { id: 44, name: 'Portable USB Monitor', price: 199.00, category: 'Monitors', rating: 4, imageUrl: 'path/to/image44.jpg' },
  { id: 45, name: 'Multi-Room Speaker System', price: 249.00, category: 'Speakers', rating: 5, imageUrl: 'path/to/image45.jpg' },
  { id: 46, name: 'Bluetooth Foldable Keyboard', price: 55.00, category: 'Keyboards', rating: 4, imageUrl: 'path/to/image46.jpg' },
  { id: 47, name: 'Smart Plug with WiFi', price: 25.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image47.jpg' },
  { id: 48, name: 'Wireless Presenter Remote', price: 33.00, category: 'Accessories', rating: 4, imageUrl: 'path/to/image48.jpg' },
  { id: 49, name: 'Premium Studio Headphones', price: 229.99, category: 'Headphones', rating: 5, imageUrl: 'path/to/image49.jpg' },
  { id: 50, name: 'UltraWide Curved Monitor', price: 559.99, category: 'Monitors', rating: 5, imageUrl: 'path/to/image50.jpg' }
]
;


app.get('/', (req, res) => {
  res.send('Product API is running');
});


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
