import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ name, id, onChange, options = ['select...'], value, label, className }) => (
    <React.Fragment>
        <label htmlFor={id}>{label}</label>
        <select name={name} id={id} onChange={onChange} value={value} className={className}>
            {options.map(
                ({ key, value }) => (
                    <option value={key} key={key}>{value}</option>
                )
            )}
        </select>
    </React.Fragment>
);

Dropdown.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array,
    value: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Dropdown;