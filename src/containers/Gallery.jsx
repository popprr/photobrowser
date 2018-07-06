import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoGrid from '../components/PhotoGrid';
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

        console.log("props", props);
        console.log("state", this.state);
    }

    componentDidMount() {
        this.props.dispatch(fetchPhotosIfNotAlreadyFetched);
    }

    render() {
        const { photos } = this.props;

        return (
            <div className="gallery">
                <PhotoGrid photos={ photos } />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.photos.items || []
});

export default connect(mapStateToProps)(withRouter(Gallery));