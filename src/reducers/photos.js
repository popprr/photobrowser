import {
    GET_PHOTOS,
    GET_PHOTO
} from '../actions';

const photos = (state={}, action) => {
    
    switch (action.type) {
        case GET_PHOTOS:
            return {
                lastUpdatedAt: new Date().getTime(),
                items: action.payload.photos
            };
        case GET_PHOTO:
            return {
                lastUpdatedAt: new Date().getTime(),
                items: [...state, action.payload.photo]
            };
        default:
            return state;
    }
};

export default photos;