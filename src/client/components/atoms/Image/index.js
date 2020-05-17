import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt = 'Rick and Morty Image', loading = 'lazy' }) => {
    return <img src={src} alt={alt} loading={loading} />;
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    loading: PropTypes.string
};

export default Image;