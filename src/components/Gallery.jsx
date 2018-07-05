import React, { Component } from 'react';
import Thumbnail from './Thumbnail';

class Gallery extends Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos } = this.props;

        return (
            <div className="gallery">
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
    }
}

export default Gallery;