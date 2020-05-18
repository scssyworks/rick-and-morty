import { SET_SORT_BY } from '../actions/sortBy';
import { SET_SORT_ORDER } from '../actions/sortOrder';

export function sortByReducer(state = 'id', action) {
    switch (action.type) {
        case SET_SORT_BY:
            return action.payload;
        default:
            return state;
    }
}

export function sortOrderReducer(state = 'asc', action) {
    switch (action.type) {
        case SET_SORT_ORDER:
            return action.payload;
        default:
            return state;
    }
}