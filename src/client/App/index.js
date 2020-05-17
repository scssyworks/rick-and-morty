import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => (
    <React.Fragment>
        {renderRoutes(route.routes)}
    </React.Fragment>
);

App.propTypes = {
    route: PropTypes.shape({
        routes: PropTypes.array
    })
}

export default {
    component: App
};