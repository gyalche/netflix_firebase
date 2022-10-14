import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
import request from './request';
const Banner = () => {
  const [movie, setMovie] = useState([]);
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string;
  }

  useEffect(() => {
    async function fetchData() {
      const respones = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        respones.data.results[
          Math.floor(Math.random() * respones.data.results.length - 1)
        ]
      );
      return respones;
    }
    fetchData();
  }, []);
  console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
