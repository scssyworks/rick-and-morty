import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../atoms/Dropdown';

const Sort = ({ sortByFields, sortOrderFields, sortByChange, sortOrderChange }) => (
    <React.Fragment>
        <div className="sort-by-fields">
            <Dropdown
                name="sortBy"
                id="sortBy"
                options={sortByFields}
                onChange={sortByChange}
                label="Sort by" />
        </div>
        <div className="sort-order">
            <Dropdown
                name="sortOrder"
                id="sortOrder"
                options={sortOrderFields}
                onChange={sortOrderChange}
                label="Sort order" />
        </div>
    </React.Fragment>
);

Sort.propTypes = {
    sortByFields: PropTypes.array.isRequired,
    sortOrderFields: PropTypes.array.isRequired,
    sortByChange: PropTypes.func.isRequired,
    sortOrderChange: PropTypes.func.isRequired
};

export default Sort;