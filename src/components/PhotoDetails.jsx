import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class PhotoView extends Component {

    componentDidMount() {
        document.addEventListener("keydown", this.navigateWithArrowKeys);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.navigateWithArrowKeys);
    }

    navigateWithArrowKeys(event) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowRight":
                let next = document.getElementById("next");
                if (next) next.click();
                break;
            case "ArrowLeft":
                let prev = document.getElementById("prev");
                if (prev) prev.click();
                break;
            case "Escape":
                let home = document.getElementById("home");
                if (home) home.click();
                break;
            default:
                break;
        }
    }

    render() {
        const {
            id,
            photo,
            next,
            previous
        } = this.props;

        if (!photo) return <NotFound message={ `A photo with id ${id} does not seem to exist.` }  />

        return (
            <div className="photo-view">
                <Link to="/gallery" id="home" className="photo-view__header">
                    Back to home page
                </Link>
                <div className="photo-view__photo">
                    <img src={ photo.url } alt={ photo.title } />
                    {
                        previous &&
                        <Link to={ `/photo/${previous.id}` } id="prev" className="photo-view__nav">
                            <FontAwesome
                                name='angle-left'
                                size='4x'
                                style={{ color: 'black' }}
                            />
                            {/* Previous */}
                        </Link>
                    }
                    {
                        next &&
                        <Link to={ `/photo/${next.id}` } id="next" className="photo-view__nav">
                            <FontAwesome
                                name='angle-right'
                                size='4x'
                            />
                            {/* Next */}
                        </Link>
                    }
                </div>
                <div className="photo-view__details">
                    <div>
                        <h1>{ photo.title }</h1>
                    </div>
                </div>
            </div>
        );
    }
}

const photoShape = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};

PhotoView.propTypes = {
    id: PropTypes.number.isRequired,
    photo: PropTypes.shape(photoShape),
    next: PropTypes.shape(photoShape),
    previous: PropTypes.shape(photoShape)
};

export default PhotoView;