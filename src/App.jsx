import { useState } from "react";
import "./App.css";
import MovieContainer from "./assets/components/movieContainer/MovieContainer";
import data from "./assets/data/data";

function App() {
  const [movie, setMovies] = useState(data);
  console.log(movie);
  const [search, setSearch] = useState("");

  const sortAscending = () => {
    let newMovieArray = [...movie];
    let sortedMovieArray = newMovieArray.sort((a, b) => {
      return a.year - b.year;
    });
    setMovies(sortedMovieArray);
  };

  const sortDescending = () => {
    let newMovieArray = [...movie];
    let sortedMovieArray = newMovieArray.sort((a, b) => {
      return b.year - a.year;
    });
    setMovies(sortedMovieArray);
  };

  const sortRateAscending = () => {
    let newMovieArray = [...movie];
    let sortedMovieArray = newMovieArray.sort((a, b) => {
      return a.rate - b.rate;
    });
    setMovies(sortedMovieArray);
  };

  const sortRateDescending = () => {
    let newMovieArray = [...movie];
    let sortedMovieArray = newMovieArray.sort((a, b) => {
      return b.rate - a.rate;
    });
    setMovies(sortedMovieArray);
  };

  const searchFunc = () => {
    let newMovieArray = [...movie];
    let result = newMovieArray.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setMovies(result);
  };

  const reset = () => {
    setMovies(data);
  };
  return (
    <>
      <header>
        <nav>
          <button onClick={sortAscending}>Sort Year Up</button>
          <button onClick={sortDescending}>Sort Year Down</button>
          <button onClick={sortRateAscending}>Sort Rating Up</button>
          <button onClick={sortRateDescending}>Sort Rating Down</button>
          <button onClick={reset}>Reset</button>
        </nav>

        <input
          type="text"
          name=""
          id=""
          placeholder="Filmtitle"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchFunc}>Search</button>
      </header>
      <main>
        {movie.map((movie, index) => {
          return (
            <div key={index} className="movieContainer">
              <MovieContainer
                title={movie.title}
                director={movie.director}
                year={movie.year}
                duration={movie.duration}
                genre={movie.genre}
                rate={movie.rate}
              />
            </div>
          );
        })}
        {/* {sortDateAsc(movies)} */}
      </main>
    </>
  );
}

export default App;
