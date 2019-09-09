import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const Movie = props => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    // const id = 1;
    const id = props.match.params.id;
    const singleMovie = MovieList.find(movie => `${movie.id}` === id);

    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <>
      <MovieCard />
      <div>
        <div>
          {stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
        <div className="save-button">Save</div>
      </div>
    </>
  );
};

export default Movie;
