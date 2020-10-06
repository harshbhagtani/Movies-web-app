import React from 'react';
import {data} from '../data.js';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import {addMovies} from '../actions'


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
   const {favourites}=this.props.store.getState();

   const index=favourites.indexOf(movie);
   if(index!==-1)return true;

   return false;


  }

displayall=()=>{

 
}

  render(){
   
    const {store}=this.props;
    const   {list}=store.getState();
    //console.log(this.props.store.getState);

  return (
    
    <div className="App">
  <Navbar/>
  <div className="main">
    <div className="tabs">
    <div className="tab" onClick={this.displayall}>Movie</div>
    <div className="tab">Favorites</div>
    </div>
    <div className="list">
     { list.map((movie,index) =>{
   
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
