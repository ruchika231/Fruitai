import React, { useState } from 'react';
import './Chatbot.css';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return; // Do nothing if the input is empty

    // Add user message
    const newMessage = {
      text: input,
      sender: 'user'
    };
    setMessages([...messages, newMessage]);

    // Simulate a bot response
    setTimeout(() => {
      const botResponse = {
        text: `You said: ${input}`,
        sender: 'bot'
      };
      setMessages([...messages, newMessage, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h2>Chat with Us</h2>
      </div>
      <div className="chatbox-body">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbox-footer">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Chatbox;


