import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../atoms/Checkbox';
import './index.scss';

const FilterItem = ({ name, id, onChange, value, checked, className = 'generic-filter' }) => (
    <li className={className}>
        <Checkbox
            name={name}
            id={`${name}_${id}`}
            onChange={onChange}
            value={value}
            className="checkbox-filter"
            label={value}
            checked={checked}
        />
    </li>
);

FilterItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    checked: PropTypes.bool,
    className: PropTypes.string
};

export default FilterItem;