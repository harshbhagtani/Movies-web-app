import React from 'react';
import {addtoMovies, addtoMovies2}from '../actions';




class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state={
      searchtext:""
      
    }
  }

addsearch=()=>{
  const {result,showsearchresult}=this.props.search;
  this.props.dispatch(addtoMovies2(result));


}
handlesearch=(e)=>{
  e.preventDefault();
  const {searchtext}=this.state;
 
console.log(searchtext);
this.props.dispatch(addtoMovies(searchtext));

this.setState({
  searchtext:''
})

}
handlechange=(e)=>{


  this.setState({
    searchtext:e.target.value
  })
}


    render(){
const {result,showsearchresult}=this.props.search;

console.log('mmmm ',result);
        return (
            <div className="nav">

          <div className="search-container">
           <form> <input  onChange={this.handlechange}/>
              <button id="search-btn" onClick={this.handlesearch}>search</button></form>
           
              {showsearchresult && <div className="search-results">
                       <div className="search-result"> 
                       <img src={result.Poster}></img>

                       <div className="movie-info"><span>{result.Title}</span>
                       <button onClick={this.addsearch}>Add to movies</button></div>
                      
                       </div>
                      
                     </div>}
          </div>
            </div>
          );
        }
    }
 

export default Navbar;
