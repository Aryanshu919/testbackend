const cors = require('cors');
const express = require('express');
const app = express();

// Enable CORS for the React frontend
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  credentials: true, // Allow cookies and authorization headers
}));

// Other middleware and routes
app.use(express.json());

app.get('/', (req, res) => {
  // Your login logic
  res.json({ message: ' tushar' });
});
app.get('/api/v1/auth/login', (req, res) => {
  // Your login logic
  res.json({ message: 'Login successful' });
});
app.post('/api/v1/auth/login', (req, res) => {
  // Your login logic
  res.json({ message: 'Login successful' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
