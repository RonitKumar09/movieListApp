import { combineReducers } from "redux";
import fetchMovieReducer from "./FetchMovies/fetchMovieReducers";
import FavouriteMoviesReducer from "./FavouriteMovies/FavouriteMoviesReducer";

const rootReducer = combineReducers({
  moviesList: fetchMovieReducer,
  favouriteMovieList: FavouriteMoviesReducer,
});

export default rootReducer;
