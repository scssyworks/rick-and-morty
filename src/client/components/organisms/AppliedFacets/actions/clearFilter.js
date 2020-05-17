export const CLEAR_FILTER = 'clear_filter';

export const clearFilter = (payload) => {
    return {
        type: CLEAR_FILTER,
        payload
    }
}