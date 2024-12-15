import React from 'react';

const TextAreaComp = ( { label, name, type, value, onChange, className }) => {
    return (
        <label className={className}>{label}
         <textarea
            id={name}
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
            rows='4'
            column='45'
        />
        </label>
    )
}

export default TextAreaComp;