import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';

const Header = () => (
    <header>
        <h1>
            <Link to='/' id="home">PhotoBrowser</Link>
        </h1>
        <div id="info">
            <span role="img" aria-label="Software developer">&#x1f468;&zwj;&#x1f4bb;</span>by Topi Latva-Salo with <img src={ Logo } alt="ReactJS"/> &amp; <span role="img" aria-label="Yellow heart">&#x1f49B;</span>.
        </div>
    </header>
);

export default Header;