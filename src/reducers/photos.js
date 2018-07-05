import { actions } from '../actions';

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

const photos = (state=[], action) => {
    // dummy
    // TODO: actual reducer
    
    switch (action.type) {
        case actions.GET_PHOTOS:
            return placeholderPhotos;
        case actions.GET_PHOTO:
            return placeholderPhotos.filter(p => p.id === action.id);
        default:
            return state;
    }
};

export default photos;