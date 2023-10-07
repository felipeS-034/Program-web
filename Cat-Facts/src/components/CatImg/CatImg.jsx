import React from 'react';

export function CatImg({ content }) {
  const imgContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
  };

  const imgStyles = {
    maxWidth: '100%',
    height: 'auto',
    border: '2px solid #333',
    borderRadius: '5px',
  };

  return (
    <div style={imgContainerStyles}>
      <img src={content} alt="Cat-image" style={imgStyles} />
    </div>
  );
}
