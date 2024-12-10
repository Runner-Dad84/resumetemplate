import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = ({ label, name, type, value, onChange, className, options }) => (
    <div>
        <label htmlFor='name'>{label} </label>
          <select
            id={name}
            name={name} 
            type={type}
            value={value}
            onChange={onChange}
            className={className}
          >
             {options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
             ))}
          </select>
    </div>
 )

 SelectComponent.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired, 
        })
    )
 }


export default SelectComponent;