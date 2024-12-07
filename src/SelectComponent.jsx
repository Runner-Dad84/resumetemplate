import React from 'react';

const SelectComponent = ({ name, type, value, onChange, className, options }) => {
    return (
        <label>{label}
          <select
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
            className={className}
          >
             {options.map((option, index) => (
                <option key={index} value={option.value}>
                  label = {option.label}
                </option>
             ))}
          </select>
        </label>
    )
}

export default SelectComponent;