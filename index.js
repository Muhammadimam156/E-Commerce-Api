const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const productRoutes = require('./routes/product.route');

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));





app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('✅ Todo API is running...');
});

connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
}).catch((error) => {
    console.error('❌ Server failed to start:', error.message);
    process.exit(1);
});

