import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';

const PhotoDetailsModal = ({ photo }) => (
    <div>
        Photo details
    </div>
);

class Gallery extends Component {
    componentDidMount() {
        this.props.getPhotos();
    }

    render() {
        const { photos } = this.props;

        return (
            <div className="gallery">
                <PhotoGrid photos={ photos } />
                <Route path={`${this.props.match.url}/:id`} component={ PhotoDetailsModal } />
            </div>
        );
    }
}

export default Gallery;