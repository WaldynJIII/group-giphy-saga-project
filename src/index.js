import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './components/App/App.js';


import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', firstGiph);
    yield takeEvery('POST_GIPHY', postGiphy);
}


const displayList = (state = [], action)=>{
    switch (action.type) {
        case 'SET_GIPHY_DISPLAY':
        console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
    
};



function* firstGiph(nextAction) {

    // replaces the need for .then and .catch
    try {
        const boxResponse = yield axios.get('/api/giphy');
        // same as dispatch
        console.log(boxResponse.data)
        const nextAction = { type: 'SET_GIPHY_DISPLAY', payload: boxResponse.data };

        yield put(nextAction); // trigger our reducer
    } catch (error) {
        console.log('Error making GET request', error);
        alert('there was a problem');
    }
}
function* postGiphy(action) {
    console.log(action.payload);
    try {
        yield axios.post('/api/giphy', action.payload);
        console.log(action.payload);
        const nextAction = { type: 'FETCH_GIPHY' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error making POST request', error);
        alert('there was a problem. Check console logs');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({

        displayList

    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
