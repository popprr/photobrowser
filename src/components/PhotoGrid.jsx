import React from 'react';
import Thumbnail from './Thumbnail'; 

const PhotoGrid = ({ photos }) => (
    <div className="photo-grid container">
        <div className="row">
            {
                photos.map(p => (
                    <div 
                        key={ p.id }
                        className="col-3 photo-grid__photo"
                    >
                        <Thumbnail
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