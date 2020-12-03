import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Catalogue from './Catalogue';
import MovieDetails from './MovieDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      surpriseYear: 1999
    }
  }

  yearRandomizer = () => {
    let randomYear = Math.floor(Math.random() * 154) + 1874;
    // Account for years with no results, and the default (1999):
    if (randomYear === 1880 || randomYear === 1882 || randomYear === 1999 || randomYear === this.state.surpriseYear) {
      randomYear--;
    } else if (randomYear === 1875 || randomYear === 1876 || randomYear === 1877) {
      randomYear = 1874;
    }

    this.setState({
      surpriseYear: randomYear
    })
  }
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <header>
            <Link to="/">
              <h1>Hackflix</h1>
            </Link>
            <Link to={`/year/${this.state.surpriseYear}`}>
              <h3>&#x1F55A;</h3>
            </Link>
          </header>

          <Route 
            exact
            path="/" 
            render={
              (props) => <Catalogue {...props} yearRandomizer={this.yearRandomizer} />
            }
          />
          
          <Route 
            exact
            path="/year/:whatYear" 
            render={
              (props) => <Catalogue {...props} yearRandomizer={this.yearRandomizer} />
            }
          />
          
          <Route exact path="/movie/:movieID" component={MovieDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
