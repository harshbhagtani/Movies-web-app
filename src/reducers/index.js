//here pure function is added
import {ADD_MOVIE,ADD_FAVOURITE} from '../actions';


const initialstate={
  list:[],
  favourites:[]
}
export default function movies(state=initialstate,action){
    if(action.type===ADD_MOVIE){
       return {
           ...state,//spread operator to retrive properties of state object in this returned one
           list:action.movies
       }
    }
    if(action.type===ADD_FAVOURITE){
        return {
            ...state,
            favourites:[action.movie,...state.favourites]
        }
    }
    return state;
}

