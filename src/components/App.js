import React from 'react';
import {data} from '../data.js';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import {addMovies,showfavourites} from '../actions'


class   App extends React.Component {

  componentDidMount(){
//make api call
//dispatch actions
const {store}=this.props;
store.subscribe(()=>{
  console.log('updated');
  this.forceUpdate();//not recommended to render againg using force update
  console.log(store.getState());
})
    
    
store.dispatch(addMovies(data));
console.log(store.getState());
  }

  checkfavourite = (movie) => {
   const {favourites}=this.props.store.getState().movies;

   const index=favourites.indexOf(movie);
   if(index!==-1)return true;

   return false;


  }

displayall=(val)=>{

 const {store}=this.props;
console.log(val);
 store.dispatch(showfavourites(val))
}

  render(){
   const {movies}=this.props.store.getState();
   
    const   {list,sf,favourites}=movies;
    const show=sf?favourites:list;

    //console.log(this.props.store.getState);

  return (
    
    <div className="App">
  <Navbar/>
  <div className="main">
    <div className="tabs">
    <div className="tab" onClick={()=>this.displayall(false)}>Movie</div>
    <div className="tab" onClick={()=>this.displayall(true)}>Favorites</div>
    </div>
    <div className="list">
     { show.map((movie,index) =>{
   
     return <Moviecard movies={movie} key={`movies-${index}`} 
     dispatch={this.props.store.dispatch}
     favor={this.checkfavourite(movie)}
       />

     })}
    </div>

  </div>
    </div>
  );
    }
}

export default App;
