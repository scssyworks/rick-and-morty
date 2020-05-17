import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const LineItem = ({ label, children }) => (
    <div className="line-item">
        <div className="label">{label}</div>
        <div className="desc">{children}</div>
    </div>
);

LineItem.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default LineItem;