const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the app
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://ruchi:<ruchi3344>@cluster0.nisst.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Message Schema
const messageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// Routes
app.get('/', (req, res) => {
  res.send('Chatbot backend is running!');
});

// Get all messages
app.get('/messages', async (req, res) => {
  const messages = await Message.find().sort('timestamp');
  res.send(messages);
});

// Post a message
app.post('/messages', async (req, res) => {
  const message = new Message({
    sender: req.body.sender,
    text: req.body.text
  });
  await message.save();
  res.send(message);
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});
