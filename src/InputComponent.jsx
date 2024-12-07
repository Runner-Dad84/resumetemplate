import React from 'react';

const InputComponent = ( { label, name, type, value, onChange, className }) => {
    return (
        <label>{label}
         <input 
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
            className={className}
        />
        </label>
    )
}

export default InputComponent;