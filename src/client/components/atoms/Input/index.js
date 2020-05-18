import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Input = ({ type = 'text', name, id, className, onChange, value, label, autocomplete = 'off', placeholder }) => (
    <React.Fragment>
        <label className="generic-input-label" htmlFor={id}>{label}</label>
        <input
            type={type}
            name={name}
            id={id}
            className={['generic-input-field', className].join(' ')}
            onChange={(e) => onChange(e.target.value)}
            value={value}
            autoComplete={autocomplete}
            placeholder={placeholder}
        />
    </React.Fragment>
);

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    autocomplete: PropTypes.string,
    placeholder: PropTypes.string
};

export default Input;