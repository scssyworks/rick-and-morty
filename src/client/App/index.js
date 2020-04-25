import React from 'react';
import { renderRoutes } from 'react-router-config';
import { fetchCurrentUser } from '../actions';
import './index.scss';

const App = ({ route }) => (
    <React.Fragment>
        {renderRoutes(route.routes)}
    </React.Fragment>
);

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};