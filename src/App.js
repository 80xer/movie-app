import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMound()
  // Update: ComponentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentWillMount() {
    console.log('will mount');
  }

  componentDidMount() {
    console.log('did mount');
    this._getMovies();
  }

  componentWillReceiveProps() {
    console.log('receive props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update');
    console.log(nextProps, nextState);
    return true;
  }

  componentWillUpdate() {
    console.log('will update');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('did update');
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => (
      <Movie
        title={movie.title}
        poster={movie.large_cover_image}
        key={movie.id}
      />
    ));
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };
  render() {
    console.log('did render');
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
