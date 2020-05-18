import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../atoms/Input';
import './index.scss';

const Search = ({ onChange, onClick, value }) => (
    <div className="search-input">
        <Input
            type="search"
            name="search"
            id="search"
            className="search-field"
            placeholder="Search by name"
            onChange={onChange}
            value={value}
            label="Search by name"
        />
        <button type="button" onClick={onClick}>
            <em className="material-icons">search</em>
        </button>
    </div>
);

Search.propTypes = {
    onChange: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    value: PropTypes.string
};

export default Search;