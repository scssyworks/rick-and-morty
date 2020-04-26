import React from 'react';
import PropTypes from 'prop-types';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <React.Fragment>
            <h1>Oops! Page not found</h1>
        </React.Fragment>
    );
};

NotFoundPage.propTypes = {
    staticContext: PropTypes.object
};

export default {
    component: NotFoundPage
};