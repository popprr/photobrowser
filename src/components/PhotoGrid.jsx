import React from 'react';
import Thumbnail from './Thumbnail';
import PropTypes from 'prop-types'; 

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

PhotoGrid.propTypes = {
    photos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        thumbnailUrl: PropTypes.string.isRequired
    }))
};

export default PhotoGrid;