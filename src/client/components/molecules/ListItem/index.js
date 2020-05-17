import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Image from '../../atoms/Image';
import LineItem from '../LineItem';
import './index.scss';
import NameTag from '../NameTag';

const ListItem = ({ listItem, className }) => {
    return (
        <li className={className}>
            <Link>
                <article>
                    <div className="img">
                        <Image src={listItem.image} />
                        <NameTag {...listItem} />
                    </div>
                    <div className="profile">
                        <LineItem label="Status">{listItem.status}</LineItem>
                        <LineItem label="Species">{listItem.species}</LineItem>
                        <LineItem label="Gender">{listItem.gender}</LineItem>
                        <LineItem label="Origin">{listItem.origin.name}</LineItem>
                        <LineItem label="Last location">{listItem.location.name}</LineItem>
                    </div>
                </article>
            </Link>
        </li>
    );
};

ListItem.propTypes = {
    listItem: PropTypes.object.isRequired,
    className: PropTypes.string
};

export default ListItem;