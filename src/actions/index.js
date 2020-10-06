const { default: movies } = require("../reducers");

/*{
    type:'ADD_MOVIE',
    movies:[{M1,M2,M3}]
}*/
// action types 
export const ADD_MOVIE='ADD_MOVIE';
//action creators

export function addMovies(movies){
   return  {type:ADD_MOVIE,
    movies:movies
    }
}
