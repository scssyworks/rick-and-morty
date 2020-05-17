import { FETCH_CONTENT } from '../actions/fetchContent';

function processFacets(payload, state) {
    if (payload.results) {
        const facets = {
            species: [],
            gender: [],
            origin: []
        };
        payload.results.forEach(item => {
            if (!facets.species.includes(item.species)) {
                facets.species.push(item.species);
            }
            if (!facets.gender.includes(item.gender)) {
                facets.gender.push(item.gender);
            }
            if (!facets.origin.includes(item.origin.name)) {
                facets.origin.push(item.origin.name);
            }
        });
        return facets;
    }
    return state;
}

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CONTENT:
            return processFacets(action.payload, state);
        default:
            return state;
    }
}