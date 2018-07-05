import React from 'react';
import { connect } from 'react-redux';
import Gallery from '../components/Gallery';
import { getPhotos } from '../actions';

const mapStateToProps = (state) => ({
    photos: state.photos
});

export default connect(mapStateToProps, { getPhotos })(Gallery);