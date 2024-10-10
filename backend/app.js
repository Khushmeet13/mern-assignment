const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());


app.use(express.json());  

app.use('/api', userRoutes);

mongoose.connect('mongodb://localhost:27017/mernApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => console.error('Connection error', error));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
