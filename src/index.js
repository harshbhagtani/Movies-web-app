import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const store=createStore(rootReducer);
console.log(store.getState());
/*
store.dispatch({
  type:'ADD_MOVIE',
  movies:[{name:'superman'}]
});*/



ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);

