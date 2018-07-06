import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
        <header>
            <Link to='/' id="home">PhotoBrowser</Link>
        </header>
    </div>
);

export default Header;