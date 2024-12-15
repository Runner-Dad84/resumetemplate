import React from 'react';

const InputComponent = ( { label, name, type, value, onChange, className }) => {
    return (
        <label className={className}>{label}
         <input 
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
        />
        </label>
    )
}

export default InputComponent;