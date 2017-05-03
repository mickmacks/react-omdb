import React, {Component} from 'react'
import Search from './components/search'

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h1>Welcome to Movie Search</h1>
      <Search />
      </div>
    )
  }
}

export default Home;
