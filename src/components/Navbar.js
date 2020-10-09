import React from 'react';
import {addtoMovies}from '../actions'



class Navbar extends React.Component{

  constructor(props){
    super(props);
    this.state={
      searchtext:"",
      showsearchresult:""
    }
  }
handlesearch=()=>{
  const {searchtext}=this.state;
console.log(searchtext);
this.props.dispatch(addtoMovies(searchtext));

}
handlechange=(e)=>{
const {searchtext}=this.state;

  this.setState({
    searchtext:e.target.value
  })
}


    render(){

        return (
            <div className="nav">
          <div className="search-container">
              <input  onChange={this.handlechange}/>
              <button id="search-btn" onClick={this.handlesearch}>search</button>
          </div>
            </div>
          );
        }
    }
 

export default Navbar;
