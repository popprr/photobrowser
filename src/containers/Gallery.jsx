import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PhotoGrid from '../components/PhotoGrid';
import { fetchPhotosIfNotAlreadyFetched } from '../actions';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Gallery extends Component {

    componentDidMount() {
        this.props.dispatch(fetchPhotosIfNotAlreadyFetched);
    }

    render() {
        const { photos } = this.props;

        return (
            <div>
                <Header />
                <div className="gallery">
                    <PhotoGrid photos={ photos } />
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    photos: state.photos.items || []
});

export default connect(mapStateToProps)(withRouter(Gallery));