import { FETCH_UPVOTES, UPDATE_UPVOTES } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_UPVOTES:
            return action.payload;
        case UPDATE_UPVOTES:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};