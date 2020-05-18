export const SET_SEARCH_STRING = 'set_search_string';

export const setSearch = (payload) => {
    return {
        type: SET_SEARCH_STRING,
        payload
    };
}