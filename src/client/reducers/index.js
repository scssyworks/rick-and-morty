import { combineReducers } from 'redux';
import feedReducer from './feedReducer';
import upvoteReducer from './upvoteReducer';
import hiddenReducer from './hiddenReducer';

export default combineReducers({
    feed: feedReducer,
    upvotes: upvoteReducer,
    hidden: hiddenReducer
});