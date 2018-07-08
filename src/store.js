import { createStore, applyMiddleware } from 'redux';
import appState from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// store middleware components in an array for convenience
const middleware = [
    thunk
];

// add logger mw if not running on production env
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleWare(appState);

export default store;