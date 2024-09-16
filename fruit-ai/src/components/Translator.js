// src/components/Translator.js
import React, { useState } from 'react';

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    setTranslatedText(`Translated: ${inputText}`);
  };

  return (
    <div className="translator-container">
      <h2>Translator</h2>
      <input
        type="text"
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleTranslate}>Translate</button>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
};

export default Translator;
