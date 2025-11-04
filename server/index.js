const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Newsletter subscription endpoint
app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Here you would typically save this to a database
  console.log('New subscription:', email);
  
  res.json({ 
    success: true, 
    message: 'Successfully subscribed to newsletter',
    email 
  });
});

// Create order endpoint
app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  
  if (!orderData) {
    return res.status(400).json({ error: 'Order data is required' });
  }

  // Here you would typically save this to a database
  console.log('New order:', orderData);
  
  res.json({ 
    success: true, 
    message: 'Order created successfully',
    order: {
      id: Date.now(),
      ...orderData,
      status: 'pending'
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});