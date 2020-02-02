import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import reducers from './reducers';
import Axios from 'axios';
import { PROXY_PATH } from '../shared/constants';

const axios = Axios.create({
    baseURL: PROXY_PATH
});
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(
    thunk.withExtraArgument(axios)
));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);