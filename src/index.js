import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';

const store=createStore(movies);
console.log(store.getState());

store.dispatch({
  type:'ADD_MOVIE',
  movies:[{name:'superman'}]
});

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

