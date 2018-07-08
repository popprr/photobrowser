import photoReducer from './photos';
import { RECEIVE_PHOTOS } from '../actions';

const photos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
    }
];

describe('Photos reducer', () => {

    it('should return the initial state when passed an unknown action', () => {
        const initialState = {};
        expect(photoReducer(initialState, { type: undefined })).toBe(initialState);
    });

    it('should return new state at RECEIVE_PHOTOS event', () => {
        const initialState = {};
        const updatedState = photoReducer(initialState, { type: RECEIVE_PHOTOS, payload: { photos } });

        expect(updatedState.items).toBe(photos);
    });
});