import React from 'react';
import {data} from '../data.js';
import Navbar from './Navbar';
import Moviecard from './Moviecard';
import movies from '../reducers/index.js';

class   App extends React.Component {

  componentDidMount(){
//make api call
//dispatch actions
const {store}=this.props;
store.subscribe(()=>{
  console.log('updated');
  this.forceUpdate();//not recommended to render againg using force update
})
    
    
store.dispatch({
  type:'ADD_MOVIE',
  movies:data
});
console.log(store.getState());
  }


  render(){
    
    const {store}=this.props;
    const movies=store.getState();

  return (
    
    <div className="App">
  <Navbar/>
  <div className="main">
    <div className="tabs">
    <div className="tab">Movie</div>
    <div className="tab">Favorites</div>
    </div>
    <div className="list">
     { movies.map((movie) =>{
   
     return <Moviecard movies={movie}/>

     })}
    </div>

  </div>
    </div>
  );
    }
}

export default App;
