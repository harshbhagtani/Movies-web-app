//here pure function is added
import {ADD_MOVIE,ADD_FAVOURITE,UNFAVOURITES,SHOW_FAVOURITES} from '../actions';


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

    return state;
}
const intialsearchstate={
    result:{}
};
export function search(state=intialsearchstate,action){

    return state;
}

const rootState={
movies:initialstate,
search:intialsearchstate
}
export default function rootReducer(state=rootState,action){

return{
    movies:movies(state.movies,action),
    search:search(state.search,action)
}

}

