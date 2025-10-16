const express = require('express');
const cors = require('cors'); 
const app = express();
require('dotenv').config();

app.use(cors());


const products = [
  { id: 1, name: 'Pro Wireless Headphones', price: 149.99, category: 'Headphones', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJvJTIwV2lyZWxlc3MlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 2, name: 'Ultra HD 4K Monitor', price: 399.00, category: 'Monitors', rating: 5, imageUrl: 'https://plus.unsplash.com/premium_photo-1669380425564-6e1a281a4d30?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx0cmElMjBIRCUyMDRLJTIwTW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 3, name: 'Compact Bluetooth Speaker', price: 45.00, category: 'Speakers', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1760088348190-023af514df23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tcGFjdCUyMEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 4, name: 'Gaming Mechanical Keyboard', price: 89.99, category: 'Keyboards', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1660496379804-b408bfacc9cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R2FtaW5nJTIwTWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 5, name: 'Ergonomic Mouse', price: 25.50, category: 'Accessories', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXJnb25vbWljJTIwbW91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 6, name: 'Portable Power Bank', price: 35.00, category: 'Accessories', rating: 3, imageUrl: 'https://images.unsplash.com/photo-1687007081823-42125fa66bb5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBvcnRhYmxlJTIwUG93ZXIlMjBCYW5rfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 7, name: 'Noise Cancelling Earbuds', price: 79.99, category: 'Headphones', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1662348317243-64a4fc5416eb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5vaXNlJTIwQ2FuY2VsbGluZyUyMEVhcmJ1ZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 8, name: 'Webcam 1080p', price: 55.00, category: 'Accessories', rating: 4, imageUrl: 'https://plus.unsplash.com/premium_photo-1749338425073-90da4abf7ee0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdlYmNhbSUyMDEwODBwfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 9, name: 'Studio Over-Ear Headphones', price: 189.99, category: 'Headphones', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1629083739877-0e52a479aa23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3R1ZGlvJTIwT3Zlci1FYXIlMjBIZWFkcGhvbmVzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 10, name: 'Budget Wireless Headphones', price: 59.99, category: 'Headphones', rating: 3, imageUrl: 'https://images.unsplash.com/photo-1739764574508-c62f2a48d27b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEJ1ZGdldCUyMFdpcmVsZXNzJTIwSGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 11, name: 'Curved 27-inch Monitor', price: 329.00, category: 'Monitors', rating: 5, imageUrl: 'https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEN1cnZlZCUyMDI3LWluY2glMjBNb25pdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 12, name: 'Full HD 24-inch Monitor', price: 149.00, category: 'Monitors', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1701318134576-6100f43c8531?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZ1bGwlMjBIRCUyMDI0LWluY2glMjBNb25pdG9yfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 13, name: 'Mini Portable Speaker', price: 29.99, category: 'Speakers', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1757166757854-ccd9ab926f5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWluaSUyMFBvcnRhYmxlJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 14, name: 'Smart WiFi Speaker', price: 99.99, category: 'Speakers', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1752955471067-294a5de5bf48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U21hcnQlMjBXaUZpJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 15, name: 'RGB Gaming Keyboard', price: 79.00, category: 'Keyboards', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1642081562971-8cb227e5dcc9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFJHQiUyMEdhbWluZyUyMEtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 16, name: 'Compact Office Keyboard', price: 39.00, category: 'Keyboards', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1760348213199-841440b335a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29tcGFjdCUyME9mZmljZSUyMEtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
  { id: 17, name: 'Wireless Charging Pad', price: 19.99, category: 'Accessories', rating: 4, imageUrl: 'https://images.unsplash.com/photo-1633381638729-27f730955c23?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBDaGFyZ2luZyUyMFBhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 18, name: 'Adjustable Laptop Stand', price: 45.00, category: 'Accessories', rating: 5, imageUrl: 'https://plus.unsplash.com/premium_photo-1661333524783-65b352331bd8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 19, name: 'Belutooth Noise Cancelling Headphones', price: 129.99, category: 'Headphones', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1631586552668-b31039d4921d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8J0JlbHV0b290aCUyME5vaXNlJTIwQ2FuY2VsbGluZyUyMEhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' },
  { id: 20, name: 'Studio Reference Monitor', price: 499.99, category: 'Monitors', rating: 5, imageUrl: 'https://images.unsplash.com/photo-1722364230254-8d181f068911?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3R1ZGlvJTIwUmVmZXJlbmNlJTIwTW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
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
