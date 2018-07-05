import React from 'react';
import { connect } from 'react-redux';

const PhotoList = ({ photos }) => (
    <div>
        Photo gallery.
        { JSON.stringify(photos) }
    </div>
);

const mapStateToProps = (state) => ({
    photos: state.photos
});

export default connect(mapStateToProps)(PhotoList);