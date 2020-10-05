import React from 'react';




class Moviecard extends React.Component{
    render(){
const {movies}=this.props;
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
              <button className="favourite-btn">Favourites</button>
              </div>
             
          </div>
            </div>
          );
        }
    }
 

export default Moviecard;
