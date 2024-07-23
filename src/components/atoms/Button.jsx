
// function Button({ onClick, children, className }) {
//     return (
//         <button onClick={onClick} className={` ${className}`}>
//             {children}
//         </button>
//     );
// }

// export default Button;


import React from 'react';

export default function Button({ type = 'button', onClick, text, className }) {
  return (
    <button type={type} onClick={onClick} className={`py-2 px-4 rounded ${className}`}>
      {text}
    </button>
  );
}

