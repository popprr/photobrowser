import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './index';

const middleware = [thunk];
const mockStore = createMockStore(middleware);

const photos = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
    }
];

describe('Photo actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should create an action to store received photos', () => {
        const expected = {
            type: actions.RECEIVE_PHOTOS,
            payload: { photos }
        };

        expect(actions.receivePhotos(photos)).toEqual(expected);
    });

    it('dispatches RECEIVE_PHOTOS action when photos have been fetcehd', async () => {
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/photos?_limit=100', { body: photos, headers: { 'content-type': 'application/json' } });

        const store = mockStore({ photos: [] });
        const expectedActions = [
            {
                type: actions.RECEIVE_PHOTOS,
                payload: { photos }
            }
        ];
        
        await store.dispatch(actions.getPhotos());
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches getPhotos when photos have not yet been fetched', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({}));

        actions.fetchPhotosIfNotAlreadyFetched(dispatch, getState);
        expect(dispatch).toBeCalled();

        //TODO: this currently only tests that the mock dispatch has been called -> actually test that it get's called with actions.getPhotos
    });

    it('does not dispatch getPhotos when photos have already been fetched', () => {
        const dispatch = jest.fn();
        const getState = jest.fn(() => ({ photos: { items: photos } }));

        actions.fetchPhotosIfNotAlreadyFetched(dispatch, getState);
        expect(dispatch).not.toBeCalled();

        //TODO: this currently only tests that the mock dispatch has been called -> actually test that it get's called with action.getPhotos
    });
});