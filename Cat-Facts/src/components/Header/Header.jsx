import React from 'react';

export function Header() {
  const headerStyles = {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
    fontFamily: 'Poppins, sans-serif'
  };

  return (
    <h1 style={headerStyles}>Cat Fact App</h1>
  );
}
