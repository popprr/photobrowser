export const RECEIVE_PHOTOS = 'receive-photos';

export const receivePhotos = (photos) => ({
    type: RECEIVE_PHOTOS,
    payload: { photos }
});

export const getPhotos = (limit=100) => async dispatch => {
    const endpoint = "https://jsonplaceholder.typicode.com/photos";
    const response = await fetch(`${endpoint}?_limit=${limit}`);
    const json = await response.json();
    dispatch(receivePhotos(json));
}

const shouldFetchPhotos = (state) => {
    const photos = state.photos && state.photos.items;
    if (!photos) return true;
    return false;
}

export const fetchPhotosIfNotAlreadyFetched = (dispatch, getState) => {
    if (shouldFetchPhotos(getState())) {
        return dispatch(getPhotos());
    }
}