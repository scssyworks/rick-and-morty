import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function dateTransform(isoTime) {
    const currentTimestamp = Date.now();
    const inputTimestamp = (new Date(isoTime)).getTime();
    const timeDiff = currentTimestamp - inputTimestamp;
    const seconds = timeDiff / 1000; // milliseconds to seconds
    if (seconds < 60) {
        return `Created ${Math.round(seconds)} seconds ago`;
    }
    const minutes = seconds / 60; // seconds to minutes;
    if (minutes < 60) {
        return `Created ${Math.round(minutes)} minutes ago`;
    }
    const hours = minutes / 60; // minutes to hours
    if (hours < 24) {
        return `Created ${Math.round(hours)} hours ago`;
    }
    const days = hours / 24; // hours to days
    if (days < 30) {
        return `Created ${Math.round(days)} days ago`;
    }
    const months = days / 30;
    if (months < 12) {
        return `Created ${Math.round(months)} months ago`;
    }
    const years = months / 12;
    return `Created ${Math.round(years)} years ago`;
}

const NameTag = ({ name, id, created }) => {
    return (
        <div className="name">
            <div className="character-name">{name}</div>
            <div className="character-id">
                <span>ID: {id}</span>
                <span>{dateTransform(created)}</span>
            </div>
        </div>
    );
}

NameTag.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired
};

export default NameTag;