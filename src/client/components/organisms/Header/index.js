import React from 'react';
import './index.scss';
import Image from '../../atoms/Image';

const Header = () => (
    <header>
        <div className="logo">
            <Image
                src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"
                alt="Logo" />
        </div>
        <h1>&ldquo;Rick and Morty&rdquo; Character profile</h1>
    </header>
);

export default Header;