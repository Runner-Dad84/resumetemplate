import React from 'react';

const InputComponent = ( { label, name, type, value, onChange }) => {
    return (
        <label>{label}
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