const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API backend hidup 🚀');
});

app.post('/callback/kisel', (req, res) => {
  console.log('CALLBACK MASUK:', req.body);
  res.json({ status: 'OK' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server jalan di port', PORT);
});
