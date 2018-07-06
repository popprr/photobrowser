import React from 'react';
import NotFound from './NotFound';
import { withRouter } from 'react-router-dom';

const PhotoView = ({
    id,
    photo,
    history
}) => {
    if (!photo) return <NotFound message={ `A photo with id ${id} does not seem to exist.` }  />

    return (
        <div className="photo-view">
        Photo { JSON.stringify(photo) }
            {/* <div className="photo-view__photo">
                <img src={ photo.url } alt={ photo.title } />
            </div>
            <div className="photo-view__sidebar">
                <div className="photo-view__details">
                    <h1>{ photo.title }</h1>
                </div>
            </div> */}
        </div>
    );
};

export default withRouter(PhotoView);