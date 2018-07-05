import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';


const AppWithStoreAndRouter = () => {
    return (
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    );
}

ReactDOM.render(
    <AppWithStoreAndRouter/>,
    document.getElementById('root')
);
registerServiceWorker();
