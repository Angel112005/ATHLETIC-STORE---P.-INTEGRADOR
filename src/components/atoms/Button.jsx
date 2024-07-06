// src/components/atoms/Button.jsx
// import React from 'react';

function Button({ onClick, children, className }) {
    return (
        <button onClick={onClick} className={`py-2 px-4 bg-gray-200 rounded-lg ${className}`}>
            {children}
        </button>
    );
}

export default Button;