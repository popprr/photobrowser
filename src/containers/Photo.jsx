import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoDetails from '../components/PhotoDetails';
import { fetchPhotosIfNotAlreadyFetched } from '../actions';

class Photo extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPhotosIfNotAlreadyFetched)
    }

    render() {
        const { photo } = this.props;
        return (
            <div>
                <PhotoDetails photo={ photo } />
            </div>
        );
    }
}

const findPhoto = (photos, id) => {
    // console.log(`Trying to find photo ${id} from `, photos);
    let photo = photos.filter(p => p.id === id)[0];
    return photo;
};

const mapStateToProps = (state, ownProps) => {
    let id = Number.parseInt(ownProps.match.params.id);
    return {
        id,
        photo: findPhoto(state.photos.items || [], id),
        onMoveNext: () => console.log("Next"),
        onMovePrevious: () => console.log("Previous")
    };
};

export default connect(mapStateToProps)(Photo);