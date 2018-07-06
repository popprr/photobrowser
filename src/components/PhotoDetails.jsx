import React, { Component } from 'react';
import NotFound from './NotFound';
import { Link } from 'react-router-dom';

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
                <h1>{ photo.title }</h1>
                <img src={ photo.url } alt={ photo.title } />
                {
                    previous &&
                    <Link to={ `/photo/${previous.id}` } id="prev">
                        Previous
                    </Link>
                }
                {
                    next &&
                    <Link to={ `/photo/${next.id}` } id="next">
                        Next
                    </Link>
                }
            </div>
        );
    }
}

export default PhotoView;