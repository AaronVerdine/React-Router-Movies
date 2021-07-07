import React from "react";

const MovieCard = props => {
  return (
    <>
      <div className="movie-card">
        <div className="save-button">Save</div>

        <h2>{props.title}</h2>

        <div className="movie-director">
          Director: <em>{props.director}</em>
        </div>

        <div className="movie-metascore">
          Metascore: <strong>{props.metascore}</strong>
        </div>

        <div>
          <h3>Actors: </h3>
          {props.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
