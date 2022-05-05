import React from "react";
import "./styles.css";
import MovieCard from "./MovieCard";
import Movie from "./movieapi";


const MovieApp = () => {
  const [movieData, setMovieData] = React.useState(Movie);
  // console.log(Movie)
  const filteritem=(category)=>{
    const updatesList=Movie.filter((e) =>{
       return e.category===category;

    })
    setMovieData(updatesList);

  }
  return (
    <>
      <header>
        <h1> Marvel Phase-Wise Movies</h1>
      </header>

      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filteritem("Phase 1")}>Phase 1</button>
          <button className="btn-group__item" onClick={() => filteritem("Phase 2")}>Phase 2</button>
          <button className="btn-group__item" onClick={() => filteritem("Phase 3")}>Phase 3</button>
          <button className="btn-group__item" onClick={() => filteritem("Phase 4")}>Phase 4</button>
        </div>
      </nav>
      <MovieCard MovieCard={movieData} />
      
    </>
  );
};

export default MovieApp;
