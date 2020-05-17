export const FETCH_CONTENT = 'fetch_content';

export const fetchContent = () => async (...args) => {
    const [dispatch, , api] = args;
    let URL = '/character/';
    const res = await api.get(URL);
    dispatch({
        type: FETCH_CONTENT,
        payload: res.data
    });
}