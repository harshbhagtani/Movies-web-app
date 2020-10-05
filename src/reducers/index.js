//here pure function is added

export default function movies(state=[],action){
    if(action.type==='ADD_MOVIE'){
        return action.movies;
    }
    return state;
}