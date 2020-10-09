//here pure function is added
import {combineReducers} from 'redux';
import {ADD_MOVIE,ADD_FAVOURITE,UNFAVOURITES,SHOW_FAVOURITES,ADD_TO_SEARCH_RESULT,ADD_TO_MOVIES} from '../actions';



const initialstate={
  list:[],
  favourites:[],
  sf:false
}
export  function movies(state=initialstate,action){
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

    if(action.type===UNFAVOURITES){
        const unf=state.favourites.filter((movie)=>{return movie.Title!==action.movie.Title});
        return {
            ...state,
            favourites:unf
        }
    }
    if(action.type===SHOW_FAVOURITES){
        return {
            ...state,
            sf:action.sf
        }
    }
    if(action.type===ADD_TO_MOVIES){
        return {
            ...state,
           list:[action.movie,...state.list]
        }
    }

    return state;
}
const intialsearchstate={
    result:{},
    showsearchresult:false
};
export function search(state=intialsearchstate,action){

if(action.type===ADD_TO_SEARCH_RESULT){
    if(action.movie.Response==='False')return state;
 return {
     result:action.movie,
     showsearchresult:true
 }
}
if(action.type===ADD_TO_MOVIES){
    return {
        ...state,
      showsearchresult:false
    }
}


    return state;
}
/*this is what combinereduceser function  do
const rootState={
movies:initialstate,
search:intialsearchstate
}
export default function rootReducer(state=rootState,action){

return{
    movies:movies(state.movies,action),
    search:search(state.search,action)
}

}*/

export default combineReducers({
 movies: movies,
 search:search
});



