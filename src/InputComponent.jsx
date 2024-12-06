import React from 'react';

export default function InputComponent ( { label, name, type, value, handler }) {
    return (
        <label>{label}
         <input 
            name={name} 
            type={type}
            value={value}
            onChange={handler}
        />
        </label>
    )
}