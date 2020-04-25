import { FETCH_HACKER_NEWS_FEED } from '../actions';

function getTimeParam(isoTime) {
    const currentTimestamp = Date.now();
    const inputTimestamp = (new Date(isoTime)).getTime();
    const timeDiff = currentTimestamp - inputTimestamp;
    const seconds = timeDiff / 1000; // milliseconds to seconds
    if (seconds < 60) {
        return `${Math.round(seconds)} seconds ago`;
    }
    const minutes = seconds / 60; // seconds to minutes;
    if (minutes < 60) {
        return `${Math.round(minutes)} minutes ago`;
    }
    const hours = minutes / 60; // minutes to hours
    if (hours < 24) {
        return `${Math.round(hours)} hours ago`;
    }
    const days = hours / 24; // hours to days
    return `${Math.round(days)} days ago`;
}

function feedProcessor(data) {
    return data.hits.map(feedItem => ({
        time: getTimeParam(feedItem.created_at),
        title: feedItem.title,
        author: feedItem.author,
        url: feedItem.url,
        commentCount: feedItem.num_comments,
        authorId: `${feedItem.author}_${(new Date(feedItem.created_at)).getTime()}`
    }));
}

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_HACKER_NEWS_FEED:
            const newState = [...state];
            const newList = feedProcessor(action.payload);
            newList.forEach(newItem => {
                const existing = newState.find(item => item.authorId === newItem.authorId);
                if (!existing) {
                    newState.push(newItem);
                }
            });
            return newState;
        default:
            return state;
    }
}