import React from "react";


const MovieCard = props => {

  return (
    <>
      <div className="movie-card">
        <h2>{props.title}</h2>
      </div>

      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>

      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>

      <div>
        <h3>Actors</h3>
      </div>
    </>
  );
};

export default MovieCard;
