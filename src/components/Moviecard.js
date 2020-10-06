import React from 'react';
import {addFavourites} from '../actions'



class Moviecard extends React.Component{

handlefavourites=()=>{
  const {movies,dispatch}=this.props;

  dispatch(addFavourites(movies));

}

    render(){
const {movies,favor}=this.props;

        return (
            <div className="movie-card">
          <div className="left">
     <img alt="movie-psoter" src={movies.Poster}></img>
          </div>
          <div className="right">
              <div className="title">{movies.Title}</div>
              <div className="plot">{movies.Plot}</div>
              <div className="footer">
              <div className="rating">{movies.imdbRating}</div>
              {favor? <button className="unfavourite-btn" onClick={this.handlefavourites}>Unfavourite</button>:
              <button className="favourite-btn" onClick={this.handlefavourites}>Favourite</button>}
              </div>
             
          </div>
            </div>
          );
        }
    }
 

export default Moviecard;
