import { HIDDEN_STATUS, HIDE_FEED } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case HIDDEN_STATUS:
            return action.payload;
        case HIDE_FEED:
            return { ...state, ...action.payload };
        default:
            return state;
    }
}