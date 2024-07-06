import React from 'react';

function HeaderTitle({ children, className }) {
    return (
        <h1 className={`text-2xl md:text-4xl font-bold ${className}`}>
            {children}
        </h1>
    );
}

export default HeaderTitle;
