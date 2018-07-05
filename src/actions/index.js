export const actions = {
    GET_PHOTOS: 'get-all-photos'
};

export const getPhotos = () => {
    return {
        type: actions.GET_PHOTOS,
        payload: "Dummy data from action."
    };
};