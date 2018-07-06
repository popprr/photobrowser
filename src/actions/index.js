export const GET_PHOTOS = 'get-all-photos';
export const GET_PHOTO = 'get-photo';

const placeholderPhotos = [
    {
        "albumId": 3,
        "id": 106,
        "title": "repellat molestiae nihil iste autem blanditiis officiis",
        "url": "http://placehold.it/600/b1f841",
        "thumbnailUrl": "http://placehold.it/150/b1f841"
    },
    {
        "albumId": 3,
        "id": 107,
        "title": "maiores ipsa ut autem",
        "url": "http://placehold.it/600/50d332",
        "thumbnailUrl": "http://placehold.it/150/50d332"
    },
    {
        "albumId": 3,
        "id": 108,
        "title": "qui tempora vel exercitationem harum iusto voluptas incidunt",
        "url": "http://placehold.it/600/627495",
        "thumbnailUrl": "http://placehold.it/150/627495"
    },
    {
        "albumId": 3,
        "id": 109,
        "title": "quidem ut quos non qui debitis exercitationem",
        "url": "http://placehold.it/600/c5e1ce",
        "thumbnailUrl": "http://placehold.it/150/c5e1ce"
    },
    {
        "albumId": 3,
        "id": 110,
        "title": "reiciendis et velit laborum recusandae",
        "url": "http://placehold.it/600/2f9e30",
        "thumbnailUrl": "http://placehold.it/150/2f9e30"
    }
];

export const getPhotos = () => ({
    type: GET_PHOTOS,
    payload: {
        photos: placeholderPhotos
    }
});

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