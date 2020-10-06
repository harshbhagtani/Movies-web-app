const { default: movies } = require("../reducers");

/*{
    type:'ADD_MOVIE',
    movies:[{M1,M2,M3}]
}*/
// action types 
export const ADD_MOVIE='ADD_MOVIE';
export const  ADD_FAVOURITE='ADD_FAVOURITE';
//action creators

export function addMovies(movies){
   return  {type:ADD_MOVIE,
    movies:movies
    }
}
export function addFavourites(movie){
    return  {type:ADD_FAVOURITE,
     movie:movie
     }
 }
 