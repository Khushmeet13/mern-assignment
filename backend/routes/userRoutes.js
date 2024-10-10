const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }
  
    try {
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
     
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(201).json(newUser);  
    } catch (error) {
      res.status(500).json({ message: 'Server error' });  
    }
  });

  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
   
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }
  
    try {
    
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
     
      if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid password' });
      }
  
    
      res.status(200).json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });
  
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

router.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
