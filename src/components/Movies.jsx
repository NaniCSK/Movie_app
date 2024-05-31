import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import { useState } from "react";

function Movies({handleAddtoWatchList, handleRemoveFromWatchList, watchList}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrevPage = () => {
    if (pageNo === 1) {
      return;
    }
    setPageNo(pageNo - 1);
  };

  const handleNextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f7bfccde5431718328d497462fb39328&page=${pageNo}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNo]);

  return (
    <div className="p-5">
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>

      <div className="flex flex-row justify-around flex-wrap gap-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            name={movie.original_title}
            poster_path={movie.poster_path}
            handleAddtoWatchList={handleAddtoWatchList}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
            watchList={watchList}
          />
        ))}
      </div>

      <Pagination
        pageNo={pageNo}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default Movies;
