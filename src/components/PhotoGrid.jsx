import React from 'react';
import Thumbnail from './Thumbnail'; 

const PhotoGrid = ({ photos }) => (
    <div className="photo-grid container">
        <div className="row">
            {
                photos.map(p => (
                    <div className="col-3 photo-grid__photo">
                        <Thumbnail
                        key={ p.id }
                        id={ p.id }
                        title={ p.title }
                        url={ p.thumbnailUrl } />
                    </div>
                ))
            }
        </div>
    </div>
);

export default PhotoGrid;