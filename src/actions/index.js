

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

 // action always return objects so here we dispatch function use middleware
export function addtoMovies(movie){

    return function (dispatch){
   const url=`http://www.omdbapi.com/?i=tt3896198&apikey=7c32a4a&t=${movie}`
    fetch(url)
    .then(response=>response.json())
    .then(movie=>{
        console.log(movie);
    })
}
}

