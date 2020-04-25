export const FETCH_HACKER_NEWS_FEED = 'fetch_hacker_news_feed';

export const fetchHackerNewsFeed = () => async (...args) => {
    const [dispatch, , api] = args;
    const res = await api.get('/search_by_date?tags=story');
    dispatch({
        type: FETCH_HACKER_NEWS_FEED,
        payload: res.data
    });
}

// Temporary local storage code below
export const UPVOTES = 'upvotes';
function getUpvotes() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                if (typeof Storage !== 'undefined') {
                    const ls = localStorage.getItem(UPVOTES) || '{}';
                    resolve(JSON.parse(ls));
                } else {
                    resolve({}); // Server side resolve
                }
            } catch (e) {
                reject(e);
            }
        }, 0);
    });
}
function updateUpvotesLS(authorId) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (typeof Storage !== 'undefined') {
                const ls = JSON.parse(localStorage.getItem(UPVOTES) || '{}');
                const prevCount = ls[authorId] || 0;
                if (prevCount < 10) {
                    ls[authorId] = prevCount + 1;
                }
                localStorage.setItem(UPVOTES, JSON.stringify(ls));
                resolve({
                    [authorId]: ls[authorId]
                }); // Assuming API will return new count for given authorId
            } else {
                resolve({
                    [authorId]: 0
                });
            }
        }, 0);
    });
}
// Temporary local storage code ends

export const FETCH_UPVOTES = 'fetch_upvotes';
export const fetchUpvotes = () => async (...args) => {
    const [dispatch] = args; // We will use api in future to fetch upvotes using a service
    const res = await getUpvotes(); // To be replaced with API call
    dispatch({
        type: FETCH_UPVOTES,
        payload: res
    });
}

export const UPDATE_UPVOTES = 'update_upvotes';
export const updateUpvotes = (authorId) => async (...args) => {
    const [dispatch] = args; // We will use api in future to increase upvotes using a service
    const res = await updateUpvotesLS(authorId);
    dispatch({
        type: UPDATE_UPVOTES,
        payload: res
    });
}