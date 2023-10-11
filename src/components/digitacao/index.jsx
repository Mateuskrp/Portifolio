import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, className, blink }) => {
  const [displayText, setDisplayText] = useState('');
  const [showBlink, setShowBlink] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(intervalId);
        setShowBlink(true);
      } else {
        const currentChar = text[currentIndex];
        if (currentChar === ' ') {
          setDisplayText((prevText) => prevText + ' ');
        } else {
          setDisplayText((prevText) => prevText + currentChar);
        }
        currentIndex++;
      }
    }, 50); // intervalo de tempo entre cada caractere (ajuste conforme necessário)

    return () => {
      clearInterval(intervalId);
    };
  }, [text]);

  return (
    <span className={className}>
      {displayText}
      {blink && showBlink && <span className="typing-effect-blink">|</span>}
    </span>
  );
};

export default TypingEffect;