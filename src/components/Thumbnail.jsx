import React from 'react';
import { Link } from 'react-router-dom';

const Thumbnail = ({
    id,
    title,
    url
}) => (
    <Link to={`/photo/${id}`}>
        <img src={ url } alt={title}/>
    </Link>
);

export default Thumbnail;