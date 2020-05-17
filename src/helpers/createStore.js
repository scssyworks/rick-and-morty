import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Axios from 'axios';
import reducers from '../client/reducers';
import { API_URL, PROXY_PATH } from '../shared/constants';

export default () => {
    const axios = Axios.create({
        baseURL: `${API_URL}${PROXY_PATH}`
    });
    const store = createStore(reducers, {}, applyMiddleware(
        thunk.withExtraArgument(axios)
    ));
    return store;
};