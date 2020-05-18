import { SET_SEARCH_STRING } from '../actions/search';

export default function (state = '', action) {
    switch (action.type) {
        case SET_SEARCH_STRING:
            return action.payload;
        default:
            return state;
    }
}