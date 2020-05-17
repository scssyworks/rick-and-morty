import React from 'react';
import PropTypes from 'prop-types';

const Link = ({
    href = '#',
    className = 'generic-link',
    isExternal = false,
    onClick = (event) => {
        event.preventDefault();
    },
    children
}) => {
    if (isExternal) {
        return <a className={className} onClick={onClick} href={href} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <a className={className} onClick={onClick} href={href}>{children}</a>;
};

Link.propTypes = {
    href: PropTypes.string,
    className: PropTypes.string,
    isExternal: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.any
};

export default Link;