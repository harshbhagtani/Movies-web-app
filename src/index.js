import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


const logger =({dispatch,getState})=>{
return function(next){
  return function(action){
    //middleware code
    console.log('action-type ',action);
    next(action);
  }
 
}
}
const store=createStore(rootReducer,applyMiddleware(logger));
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

