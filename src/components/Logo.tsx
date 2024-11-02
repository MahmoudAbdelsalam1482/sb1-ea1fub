import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src="/albaraka-logo.svg"
        alt="alBaraka Bank Logo" 
        className="h-8 w-auto"
        style={{ maxWidth: '180px' }}
      />
    </div>
  );
}