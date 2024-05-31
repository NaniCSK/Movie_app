import React from "react";

function MovieCard({
  movie,
  poster_path,
  name,
  handleAddtoWatchList,
  handleRemoveFromWatchList,
  watchList,
}) {
  function doesContain(movie) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movie.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className=" h-[40vh] w-[150px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movie) ? (
        <div
          onClick={() => {
            handleRemoveFromWatchList(movie);
          }}
          className="h-8 w-8 items-center flex justify-center m-2 rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => {
            handleAddtoWatchList(movie);
          }}
          className="h-8 w-8 items-center flex justify-center m-2 rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}
      <div className="text-0.5xl text-white font-bold text-center w-full bg-gray-900/60 p-2">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
