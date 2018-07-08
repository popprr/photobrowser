import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ message }) => (
    <div className="not-found">
        <div className="not-found__status">
            404
        </div>
        <div className="not-found__message">
            { message }
        </div>
        <Link to="/">Go to home page</Link>
    </div>
);

export default NotFound;