import { createStore, applyMiddleware } from 'redux';
import appState from './reducers';

// action logger middlware for use while developing
const actionLogger = store => next => action => {
    console.log("Action type:", action.type);
    console.log("Action payload:", action.payload);
    console.log("State before:", store.getState());
    next(action);
    console.log("State after:", store.getState());
};

// store middleware components in a list for convenience
const middleware = [
    actionLogger
];

const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleWare(appState);

export default store;