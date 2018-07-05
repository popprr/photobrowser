import React from 'react';
import { connect } from 'react-redux';

const PhotoDetails = ({ photoId }) => (
    <div>
        Details for photo with id { photoId } here.
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    photoId: ownProps.match.params.id
});

export default connect(mapStateToProps)(PhotoDetails);