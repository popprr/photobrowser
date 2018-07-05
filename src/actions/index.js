export const actions = {
    GET_PHOTOS: 'get-all-photos',
    GET_PHOTO: 'get-photo'
};

export const getPhotos = () => ({
    type: actions.GET_PHOTOS,
    payload: "Dummy data from action."
});

export const getPhoto = (id) => ({
    type: actions.GET_PHOTO,
    id: id,
    payload: undefined
});