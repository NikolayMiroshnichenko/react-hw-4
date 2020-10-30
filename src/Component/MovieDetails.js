import React, { Fragment } from "react";

const MovieDetails = ({ item }) => {
  const { poster_path, title, vote_average, overview, genres } = item;

  return (
    <Fragment>
      <div className="MovieDetails container">
        <div className="MovieDetails-img">
          <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt='' />
        </div>
        <div className="MovieDetails-content">
          <h2>{title}</h2>
          <p className="MovieDetails-content__text">
            <span>Vote Average:</span> {vote_average}
          </p>
          <p className="MovieDetails-content__text">
            <span>Overview:</span> {overview}
          </p>
          <div className="MovieDetails-content__block">
            <span>Genres:</span>
            <div className="MovieDetails-content__block">
              {genres.map((item) => (
                <p key={item.name}>{item.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieDetails;
