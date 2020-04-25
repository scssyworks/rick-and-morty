import React from 'react';
import './index.scss';

const Header = () => (
    <header className="hacker-news-clone-header">
        <div className="logo">
            <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" alt="Hacker News clone" />
        </div>
        <h1>Hacker News Clone</h1>
    </header>
);

export default Header;