import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


import MovieCard from "./MovieCard";
import Movie from "./Movie";

const MovieList = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link to={`movies/${movie.id}`}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;

  return (
    <div>
    <MovieCard title={movie.title} director={movie.director} metascore={movie.metascore} />
    {/* <Movie /> */}
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
