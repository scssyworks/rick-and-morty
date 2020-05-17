import { FETCH_CONTENT } from '../actions/fetchContent';
import { UPDATE_FILTER } from '../../../components/organisms/Filters/actions/updateFilter';
import { CLEAR_FILTER } from '../../../components/organisms/AppliedFacets/actions/clearFilter';

function processFacets(payload, state) {
    if (payload.results) {
        const facets = {
            species: [],
            gender: [],
            origin: []
        };
        payload.results.forEach(item => {
            if (!facets.species.find(curr => curr.name === item.species)) {
                facets.species.push({ name: item.species, checked: false });
            }
            if (!facets.gender.find(curr => curr.name === item.gender)) {
                facets.gender.push({ name: item.gender, checked: false });
            }
            if (!facets.origin.find(curr => curr.name === item.origin.name)) {
                facets.origin.push({ name: item.origin.name, checked: false });
            }
        });
        return facets;
    }
    return state;
}

function updateFilters(payload, state) {
    if (payload) {
        const newState = { ...state };
        Object.keys(payload).forEach(facet => {
            const targetFilter = newState[facet].find(curr => curr.name === payload[facet].name);
            targetFilter.checked = !targetFilter.checked;
        });
        return newState;
    }
    return state;
}

function clearCheckedItems(facet, state) {
    if (facet) {
        const newState = { ...state };
        state[facet].forEach(item => {
            item.checked = false;
        });
        return newState;
    }
    return state;
}

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CONTENT:
            return processFacets(action.payload, state);
        case UPDATE_FILTER:
            return updateFilters(action.payload, state);
        case CLEAR_FILTER:
            return clearCheckedItems(action.payload, state);
        default:
            return state;
    }
}