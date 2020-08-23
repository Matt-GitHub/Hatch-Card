import React from 'react';
import './Button.css';
const Button = ({ text, id }) => {
  return (
    <button id={id} className="button">
      {text}
    </button>
  );
};

export default Button;
