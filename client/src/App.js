import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route path="/movies/movie/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} /> } /> */}
      {/* <Route path="/movie/:id" component={Movie} /> */}
      <Route path="/movie/:id" render={props => <MovieList {...props}  MovieList={MovieList} /> } />
      <MovieCard />

      {/* <MovieCard title={savedList.title} director={savedList.director} metascore={savedList.metascore}/> */}

    </div>
  );
};

export default App;
