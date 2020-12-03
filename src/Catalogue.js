import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Catalogue extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    axios({
      url: `https://api.themoviedb.org/3/discover/movie`,
      method: `GET`,
      responseType: `json`,
      params: {
        api_key: 'f012df5d63927931e82fe659a8aaa3ac',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999
      }
    })
      .then((res) => {
        this.setState({
          movies: res.data.results
        })
      })
  }

  render() {
    return(
      <div className="catalogue">
        {
          this.state.movies.map((singleMovieObject) => {
            return (
              <div key={singleMovieObject.id} className="movie">
                <Link to={`/movie/${singleMovieObject.id}`}>
                  <img src={`http://image.tmdb.org/t/p/w500/${singleMovieObject.poster_path}`} alt={`Poster for ${singleMovieObject.original_title}`} />
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Catalogue