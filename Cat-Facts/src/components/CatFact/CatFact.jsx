import React from 'react';

export function CatFact({ text }) {
  const catFactStyles = {
    textAlign: 'center',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <p style={catFactStyles}>{text}</p>
  );
}
