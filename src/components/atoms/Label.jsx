import React from 'react';

export default function Label({ text, htmlFor, className }) {
  return (
    <label htmlFor={htmlFor} className={`  ${className}`}>
      {text}
    </label>
  );
}
