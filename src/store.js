import { createStore, applyMiddleware } from 'redux';
import appState from './reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

// action logger middlware for use while developing
// const actionLogger = store => next => action => {
//     console.log("Action type:", action.type);
//     console.log("Action payload:", action.payload);
//     console.log("State before:", store.getState());
//     next(action);
//     console.log("State after:", store.getState());
// };

// store middleware components in a list for convenience
const middleware = [
    thunk,
    createLogger()
];

const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleWare(appState);

export default store;