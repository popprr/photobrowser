import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';

const Header = () => (
    <header>
        <h1>
            <Link to='/' id="home">PhotoBrowser</Link>
        </h1>
        <div id="info">
            &#x1f468;&zwj;&#x1f4bb; by Topi Latva-Salo with <img src={ Logo } alt="ReactJS"/> &amp; &#x1f49B;.
        </div>
    </header>
);

export default Header;