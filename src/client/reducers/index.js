import { combineReducers } from 'redux';
import feedReducer from './feedReducer';
import upvoteReducer from './upvoteReducer';

export default combineReducers({
    feed: feedReducer,
    upvotes: upvoteReducer
});