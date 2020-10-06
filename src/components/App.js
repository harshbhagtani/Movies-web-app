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
})
    
    
store.dispatch(addMovies(data));
console.log(store.getState());
  }


  render(){
    
    const {store}=this.props;
    const   {list}=store.getState();

  return (
    
    <div className="App">
  <Navbar/>
  <div className="main">
    <div className="tabs">
    <div className="tab">Movie</div>
    <div className="tab">Favorites</div>
    </div>
    <div className="list">
     { list.map((movie,index) =>{
   
     return <Moviecard movies={movie} key={`movies-${index}`}/>

     })}
    </div>

  </div>
    </div>
  );
    }
}

export default App;
