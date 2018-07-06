import React from 'react';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';

const PhotoView = ({
    id,
    photo,
    next,
    previous,
    history
}) => {
    if (!photo) return <NotFound message={ `A photo with id ${id} does not seem to exist.` }  />

    return (
        <div className="photo-view">
            <h1>{ photo.title }</h1>
            <img src={ photo.url } alt={ photo.title } />
            {
                next &&
                <Link to={ `/photo/${next.id}` } >
                    Next
                </Link>
            }
            {
                previous &&
                <Link to={ `/photo/${previous.id}` } >
                    Previous
                </Link>
            }
        </div>
    );
};

export default PhotoView;