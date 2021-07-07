import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const addToSavedList = movie => {
      setSavedList([...savedList, movie]);
    };
  }, []);

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route path="/movies/movie/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} /> } /> */}
      <Route path="/movie/:id" render={props => <Movie {...props} />} />
    </div>
  );
};

export default App;
