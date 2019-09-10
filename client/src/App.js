import React, { useState } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      {/* <Route path="/movies/movie/:id" render={props => <Movie {...props} addToSavedList={addToSavedList} /> } /> */} 
      <Route exact path="/movie/:id" component={Movie} />
      {/* <Route  path="/movie/:id/moviecard" render={(props) => <MovieCard  data={props.match.params.id} />} /> */}
      <MovieCard/>

    </div>
  );
};

export default App;
