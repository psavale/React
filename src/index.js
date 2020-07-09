import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './js/reducers/rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//creating a Redux store that holds the complete state tree of your app. There should only be a single store in your app.
var store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
);

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();
