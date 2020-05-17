import { combineReducers } from 'redux';
import listReducer from '../pages/HomePage/reducers/listReducer';
import facetReducer from '../pages/HomePage/reducers/facetReducer';

export default combineReducers({
    list: listReducer,
    facets: facetReducer
});