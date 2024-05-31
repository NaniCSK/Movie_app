import React, { useState, useEffect } from "react";
import genresIds from "../Utility/genresIds";

function WatchList({ watchList, setWatchList, handleRemoveFromWatchList }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [watchListGenre, setWatchListGenre] = useState(["Your WatchList"]);
  const [currentGenre, setCurrentGenre] = useState("Your WatchList");
  let handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrentGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((a, b) => {
      return a.vote_average - b.vote_average;
    });

    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((a, b) => {
      return b.vote_average - a.vote_average;
    });

    setWatchList([...sortedDecreasing]);
  };

  useEffect(() => {
    console.log("watchList", watchList);
    let temp = new Set(watchList.map((movie) => {
      return genresIds[movie.genre_ids[0]];
    }))
    setWatchListGenre(["Your WatchList", ...temp]);
    console.log(watchListGenre, temp);
  }, [watchList]);

  return (
    <>
      <div className="flex justify-center my-4 flex-wrap">
        {watchListGenre.map((genre) => {
          return <div
            className={
              currentGenre === genre
                ? "text-xl text-white bg-blue-400 font-bold px-5 flex justify-center items-center m-5 rounded-xl h-[3rem]"
                : "text-xl text-white bg-gray-400 font-bold px-5 flex justify-center items-center m-5 rounded-xl h-[3rem]"
            }
            onClick={() => handleFilter(genre)}
          >
            {genre}
          </div>
        })}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={searchQuery}
          type="text"
          placeholder="Search"
          className="h-[2rem] w-[18rem] bg-gray-300 px-4"
        />
      </div>
      <div className="border border-gray-300 overflow-hidden rounded-lg m-8">
        <table className="w-full text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-around">
                <div onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div>Rating</div>
                <div onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Gerne</th>
            </tr>
          </thead>
          <tbody>
            {watchList.filter((movie) => {
              if (currentGenre === "Your WatchList") {
                return true;
              }
              return genresIds[movie.genre_ids[0]] == currentGenre;
            })
              .filter((movie) => {
                return movie.title
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase());
              })
              .map((movie) => {
                return (
                  <tr className="hover:bg-gray-200 border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-[100px]"
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      />
                      <div className="mx-10">{movie.title}</div>
                    </td>
                    <td>{movie.vote_average}</td>
                    <td>{movie.popularity}</td>
                    <td>{genresIds[movie.genre_ids[0]]}</td>
                    {console.log(genresIds[movie.genre_ids[0]])}
                    <td onClick={() => handleRemoveFromWatchList(movie)} className="cursor-pointer text-red-600 hover:underline">DELETE</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
