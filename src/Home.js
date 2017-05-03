import React, {Component} from 'react'
import SearchContainer from './containers/searchcontainer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to Movie Search</h1>
        <SearchContainer />
      </div>
    );
  }
}

export default Home;
