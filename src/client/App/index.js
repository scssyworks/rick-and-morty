import React from 'react';
import { renderRoutes } from 'react-router-config';
import './index.scss';
import Header from '../components/Header';

const App = ({ route }) => (
    <React.Fragment>
        <Header />
        {renderRoutes(route.routes)}
    </React.Fragment>
);

export default {
    component: App
};