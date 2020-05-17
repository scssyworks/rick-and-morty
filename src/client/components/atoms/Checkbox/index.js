import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ name, id, value, className, onChange, label, checked }) => (
    <React.Fragment>
        <input type="checkbox" name={name} id={id} className={className} onChange={onChange} value={value} checked={checked} />
        <label className="checkbox-label" htmlFor={id}>{label}</label>
    </React.Fragment>
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default Checkbox;