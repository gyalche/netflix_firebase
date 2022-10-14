import React from 'react';
import Banner from './Banner';
import './homeScree.css';
import Nav from './Nav';
import request from './request';
import Row from './Row';
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINAL"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movie" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Moview" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
