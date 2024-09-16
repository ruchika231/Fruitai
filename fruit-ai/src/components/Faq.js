// src/components/Faq.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Faq.css';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/faqs');
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="faq-container">
      <h2>FAQ</h2>
      <ul>
        {faqs.map((faq) => (
          <li key={faq._id}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
