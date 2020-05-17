import { FETCH_CONTENT } from '../actions/fetchContent';

function processPayload(payload, state) {
    if (payload.results) {
        return payload.results.map(item => {
            item.hidden = false;
            return item;
        });
    }
    return state;
}

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CONTENT:
            return processPayload(action.payload, state);
        default:
            return state;
    }
}