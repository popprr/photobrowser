import React from 'react';
import Thumbnail from './Thumbnail'; 

const PhotoGrid = ({ photos }) => (
    <div className="photo-grid">
        {
        photos.map(p => (
            <Thumbnail
                key={ p.id }
                id={ p.id }
                title={ p.title }
                url={ p.thumbnailUrl } />
        ))
        }
    </div>
);

export default PhotoGrid;