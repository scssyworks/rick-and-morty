import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <React.Fragment>
            <h1>Oops! Page not found</h1>
        </React.Fragment>
    );
};

export default {
    component: NotFoundPage
};