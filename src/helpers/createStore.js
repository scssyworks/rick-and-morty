import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import reducers from '../client/reducers';
import { API_URL } from '../shared/constants';

export default (req) => {
    const axios = Axios.create({
        baseURL: API_URL,
        headers: {
            cookie: req.get('cookie') || ''
        }
    });
    const store = createStore(reducers, {}, applyMiddleware(
        thunk.withExtraArgument(axios)
    ));
    return store;
};