import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import App from './components/App/App';


import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* getFavorite() {
    try {
        yield axios.get('/api/favorite');
        const nextAction = { type: 'GET_FAVORITES' }
        yield put(nextAction);
    } catch (error) {
        console.log('ERROR in getfavorite', error);
        alert('Something went wrong in getfavorite');
    }
}


function* rootSaga() {
    yield takeEvery('FETCH_GIPHY', getFavorite);
    // yield takeEvery('POST_GIPHY', postFruitFetcher);
}


const displayList = (state = [], action)=>{
    switch (action.type) {
        case 'SET_GIPHY_DISPLAY':
            return action.payload;
        default:
            return state;
    }
};


// function* firstSaga(action) {

//     // replaces the need for .then and .catch
//     try {
//         const boxResponse = yield axios.get('/api/giphy');
//         // same as dispatch
//         console.log(boxResponse.data)
//         const nextAction = { type: 'SET_GIPHY_DISPLAY', payload: boxResponse.data };
//         yield put(nextAction); // trigger our reducer
//     } catch (error) {
//         console.log('Error making GET request');
//         alert('there was a problem');
//     }
// }
// function* postFruitFetcher(action) {
//     try {
//         yield axios.post('/api/plant', action.payload);
//         const nextAction = { type: 'POST_GIPHY' };
//         yield put(nextAction);
//     } catch (error) {
//         console.log('Error making POST request');
//         alert('there was a problem. Check console logs');
//     }
// }

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
