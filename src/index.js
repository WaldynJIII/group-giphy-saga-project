import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './components/App/App';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios';

function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', firstGiph);
    yield takeEvery('POST_GIPHY', postGiph);
    yield takeEvery('FETCH_GIPHY', getCatGiph);
}

const boxList = (state = [], action) => {
    switch (action.type) {
        case 'SET_BOXES':
            return action.payload;
        default:
            return state;
    }
};

const giphyList = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIPH':
            return action.payload;
        default:
            return state;
    }
};

function* getCatGiph(action) {
    try {
        const serverResponse = yield axios.get('/api/category');
        console.log(serverResponse);
        const nextAction = {type: 'SET_GIPH', payload: serverResponse.data};
        yield put(nextAction);
    } catch (error) {
        alert('there was an error in GET category');
    }
}

function* firstGiph(action) {

    // replaces the need for .then and .catch
    try {
        const serverResponse = yield axios.get('/api/giphy');
        // same as dispatch
        console.log(serverResponse.data)
        const nextAction = { type: 'SET_GIPHY_DISPLAY', payload: serverResponse.data };
        yield put(nextAction); // trigger our reducer
    } catch (error) {
        console.log('Error making GET request');
        alert('there was a problem');
    }
}
function* postGiph(action) {
    try {
        yield axios.post('/api/plant', action.payload);
        const nextAction = { type: 'FETCH_FRUITS' };
        yield put(nextAction);
    } catch (error) {
        console.log('Error making POST request');
        alert('there was a problem. Check console logs');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        giphyList,
        boxList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
