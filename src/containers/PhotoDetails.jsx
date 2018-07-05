import React from 'react';
import { connect } from 'react-redux';
import PhotoView from '../components/PhotoView';

const findPhoto = (photos, id) => {
    console.log(`Trying to find photo ${id} from `, photos);
    let photo = photos.filter(p => p.id === id);
    return photo;
};

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.id,
    photo: findPhoto(state.photos, ownProps.match.params.id)
});

export default connect(mapStateToProps)(PhotoView);