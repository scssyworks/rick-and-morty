import { FETCH_CONTENT } from '../pages/HomePage/actions/fetchContent';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CONTENT:
            return action.payload;
        default:
            return state;
    }
}