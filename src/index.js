import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';


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

ReactDOM.render(<App />, document.getElementById('react-root'));
