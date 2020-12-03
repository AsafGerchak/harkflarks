import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <header>
            <h1>Hackflix</h1>
          </header>

          <Route exact path="/" component={Catalogue} />
          <Route exact path="/movie/:movieID" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
