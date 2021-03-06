import { combineReducers } from 'redux';
import listReducer from '../pages/HomePage/reducers/listReducer';
import facetReducer from '../pages/HomePage/reducers/facetReducer';
import searchReducer from '../components/organisms/SearchFilters/reducers/searchReducer';
import { sortByReducer, sortOrderReducer } from '../components/organisms/SearchFilters/reducers/sortReducer';

export default combineReducers({
    list: listReducer,
    facets: facetReducer,
    search: searchReducer,
    sortBy: sortByReducer,
    sortOrder: sortOrderReducer
});