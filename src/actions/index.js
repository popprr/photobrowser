export const GET_PHOTOS = 'get-all-photos';
export const GET_PHOTO = 'get-photo';

export const receivePhotos = (photos) => ({
    type: GET_PHOTOS,
    payload: { photos }
});

export const getPhotos = (limit=100) => dispatch => {
    const endpoint = "https://jsonplaceholder.typicode.com/photos";
    return fetch(`${endpoint}?_limit=${limit}`)
        .then(res => res.json())
        .then(json => dispatch(receivePhotos(json)));
}

export const getPhoto = (id) => {
    const photo = placeholderPhotos.filter(p => p.id === id);

    return {
        type: GET_PHOTO,
        payload: {
            id,
            photo
        }
    }
};

const shouldFetchPhotos = (state) => {
    const photos = state.photos && state.photos.items;
    if (!photos) return true;
    return false;
}

const shouldFetchPhoto = (state, id) => {
    const photos = state.photos;
    if (!photos) return true;
    if (photos.find(p => p.id === id)) return true;
    return false;
}

export const fetchPhotosIfNotAlreadyFetched = (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
        console.log("fetching phtoos");
        return dispatch(getPhotos());
    }
}

export const fetchPhotoIfNotAlreadyFetched = id => (dispatch, getState) => {
    if (shouldFetchPhoto(getState(), id)) {
        return dispatch(getPhoto(id));
    }
}