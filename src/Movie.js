import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// Movie component
const Movie = ({ title, poster }) => {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

// MoviePoster component
const MoviePoster = ({ poster }) => {
  return <img style={{ width: '200px' }} src={poster} />;
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
};

export default Movie;
