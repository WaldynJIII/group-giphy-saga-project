import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './App';


import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', firstSaga);
    yield takeEvery('POST_GIPHY', postFruitFetcher);
}

const boxList = (state = [], action) => {
    switch (action.type) {
        case 'SET_BOXES':
            return action.payload;
        default:
            return state;
    }
};

const plantList = (state = [], action) => {
    switch (action.type) {
        case 'SET_PLANT':
            return action.payload;
        default:
            return state;
    }
};
function* firstSaga(action) {

    // replaces the need for .then and .catch
    try {
        const boxResponse = yield axios.get('/api/plant');
        // same as dispatch
        console.log(boxResponse.data)
        const nextAction = { type: 'SET_PLANT', payload: boxResponse.data };
        yield put(nextAction); // trigger our reducer
    } catch (error) {
        console.log('Error making GET request');
        alert('there was a problem');
    }
}
function* postFruitFetcher(action) {
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
        plantList,
        boxList
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
