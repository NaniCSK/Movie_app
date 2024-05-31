import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import Banner from "./components/Banner.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchList, setWatchList] = useState([]);

  let handleAddtoWatchList = (movieObj) => {
    let currentWatchList = [...watchList, movieObj];
    localStorage.setItem("watchList", JSON.stringify(currentWatchList));
    setWatchList(currentWatchList);
  };

  let handleRemoveFromWatchList = (movieObj) => {
    let newWatchList = watchList.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem("watchList", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("watchList");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleAddtoWatchList={handleAddtoWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                  watchList={watchList}
                />
              </>
            }
          />
          <Route
            path="/Watchlist"
            element={
              <WatchList
                watchList={watchList}
                setWatchList={setWatchList}
                handleRemoveFromWatchList={handleRemoveFromWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
