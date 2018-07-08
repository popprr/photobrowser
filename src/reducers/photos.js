import {
    RECEIVE_PHOTOS,
} from '../actions';

const photos = (state={}, action) => {
    
    switch (action.type) {
        case RECEIVE_PHOTOS:
            return {
                lastUpdatedAt: new Date().getTime(),
                items: action.payload.photos
            };
        default:
            return state;
    }
};

export default photos;