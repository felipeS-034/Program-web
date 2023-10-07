import React from 'react';

export function Button({ onClick }) {
  const containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const botonStyles = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textAlign: 'center',
    textDecoration: 'none',
  };

  const hoverStyles = {
    backgroundColor: '#0056b3',
  };

  const activeStyles = {
    backgroundColor: '#003d80',
  };

  return (
    <div style={containerStyles}>
      <button
        style={botonStyles}
        onMouseOver={() => { this.style = hoverStyles; }}
        onMouseOut={() => { this.style = botonStyles; }}
        onMouseDown={() => { this.style = activeStyles; }}
        onMouseUp={() => { this.style = hoverStyles; }}
        onClick={onClick}
      >
        New Cat Fact
      </button>
    </div>
  );
}
