import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PhotoGrid from './PhotoGrid';
import { fetchPhotosIfNotAlreadyFetched } from '../actions';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const modalStyles = {
    content: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

class Gallery extends Component {
    constructor(props) {
        super(props);
        
        // const modalPhotoId = props.match.params.photoId;
        // this.state = {
        //     modalOpen: modalPhotoId == true
        // }

        // console.log("props", props);
        // console.log("state", this.state);
    }

    componentDidMount() {
        this.props.dispatch(fetchPhotosIfNotAlreadyFetched());
    }

    render() {
        const { photos } = this.props;

        return (
            <div className="gallery">
                <PhotoGrid photos={ photos } />
                {/* <ReactModal
                    isOpen={ this.state.modalOpen }
                >
                    Moikka!
                </ReactModal> */}
            </div>
        );
    }
}

export default withRouter(Gallery);