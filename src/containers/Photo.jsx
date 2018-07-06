import React, { Component } from 'react';
import { connect } from 'react-redux';
import PhotoDetails from '../components/PhotoDetails';
import { fetchPhotosIfNotAlreadyFetched } from '../actions';
import _ from 'lodash';

class Photo extends Component {
    componentDidMount() {
        this.props.dispatch(fetchPhotosIfNotAlreadyFetched)
    }

    render() {
        const { photo, next, previous } = this.props;
        return (
            <div>
                <PhotoDetails
                    photo={ photo }
                    previous={ previous }
                    next={ next }/>
            </div>
        );
    }
}

const findPhoto = (photos, id) => {
    // console.log(`Trying to find photo ${id} from `, photos);
    let photo = photos.filter(p => p.id === id)[0];
    return photo;
};

const getPos = (photos, p) => {
    return _.findIndex(photos, p);
}

const getNext = (photos, current) => {
    let curPos = getPos(photos, current);    
    if (curPos === -1) return undefined;
    if (curPos === photos.length - 1) return undefined;
    return photos[curPos + 1];
}

const getPrevious = (photos, current) => {
    let curPos = getPos(photos, current);    
    if (curPos <= 0) return undefined;
    return photos[curPos - 1];
}

const mapStateToProps = (state, ownProps) => {
    let id = Number.parseInt(ownProps.match.params.id);
    let photo = findPhoto(state.photos.items || [], id);
    let next = getNext(state.photos.items || [], photo); 
    let previous = getPrevious(state.photos.items || [], photo);
    return {
        photo,
        next,
        previous
    };
};

export default connect(mapStateToProps)(Photo);