

/*{
    type:'ADD_MOVIE',
    movies:[{M1,M2,M3}]
}*/


//action creators
export const ADD_MOVIE='ADD_MOVIE';
export const  ADD_FAVOURITE='ADD_FAVOURITE';
export const UNFAVOURITES='UNFAVOURITES';
export const SHOW_FAVOURITES='SHOW_FAVOURITES';

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
 export function unFavourites(movie){

    return {
        type:UNFAVOURITES,
        movie:movie
    }
 }
 export function showfavourites(val){
     return {
         type:SHOW_FAVOURITES,
         sf:val
     }
 }

 // action types 
