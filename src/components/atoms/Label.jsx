// import React from 'react';

// function Label({ children, className }) {
//     return (
//         <div className={`text-center text-xl ${className}`}>
//             {children}
//         </div>
//     );
// }

// export default Label;

function Label({ className, children }) {
    return (
        <div className={`text-center ${className}`}>
            {children}
        </div>
    );
}

export default Label;
