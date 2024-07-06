// import React from 'react';
import Label from '../atoms/Label';
import Image from '../atoms/Image';

function ActionButton({ imageSrc, label, onClick }) {
    return (
        <button 
            onClick={onClick} 
            className="border p-10 flex flex-col items-center hover:bg-neutral-400 border-black rounded-3xl"
        >
            <Image src={imageSrc} alt={label} />
            <Label className="mt-2 text-x1">{label}</Label>
        </button>
    );
}

export default ActionButton;
