import React from 'react';

const NotFound = ({ message }) => (
    <div className="not-found">
        <div className="not-found__status">
            404
        </div>
        <div className="not-found__message">
            { message }
        </div>
    </div>
);

export default NotFound;