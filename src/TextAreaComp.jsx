import React from 'react';

const TextAreaComp = ( { name, type, value, onChange, className }) => {
    return (
         <textarea
            id={name}
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
            rows='4'
            column='45'
            className={className}
        />
    )
}

export default TextAreaComp;