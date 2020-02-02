import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
    const authButton = (
        <a href={auth ? '/api/logout' : '/api/auth/google'}>
            {auth ? 'Logout' : 'Login'}
        </a>
    );
    return (
        <header>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">React SSR</Link>
                    <ul className="right">
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/admins">Admins</Link></li>
                        <li>{authButton}</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);