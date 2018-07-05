import React from 'react';

const Thumbnail = ({
    id,
    title,
    url
}) => (
    <a className="gallery__thumbnail" href={ `/photo/${id}` }>
        <img src={ url } alt={title}/>
    </a>
);

export default Thumbnail;