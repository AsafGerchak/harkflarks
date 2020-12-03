import { Component } from 'react';
import axios from 'axios';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movieDeets: {}
    }
  }

  componentDidMount() {
    axios({
      url: `https://api.themoviedb.org/3/movie/${this.props.match.params.movieID}`,
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: '1'
      },
    }).then( (res) => {
      this.setState({
        movieDeets: res.data
      })
    })
  }

  render() {
    const { original_title, tagline, overview, poster_path } = this.state.movieDeets;

    return (
      <div className="poster">
        <div className="description">
          <h1>{original_title}</h1>
          <h2>{tagline}</h2>
          <p>{overview}</p>
        </div>
        <div className="image">
          <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={`One sheet for ${original_title}`}/>
        </div>
      </div>
    )
  }
}

export default MovieDetails;