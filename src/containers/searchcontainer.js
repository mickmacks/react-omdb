import React, {Component} from 'react'
import {queryOmdb} from '../services/utilities'
import Search from '../components/search'
import Results from '../components/results'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state={
      movies: [],
      hasSearched: false,
      query: ''
    }
  }

  onSearchInput(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleToggleSearch (event) {
    let toggledState = !this.state.hasSearched
    this.setState({
      hasSearched: toggledState
    })
  }

  onSubmitQuery(event) {
    event.preventDefault()
    console.log('searched!')
    let component = this
    queryOmdb(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        movies: data
      })
    })
    // return the received movies to this.state
    // somehow pass this.state up to search container, to be used in MovieList
  }

  render(){
    if (this.state.hasSearched) {

      return(
        <div>
          <button
            onClick={ event => this.handleToggleSearch(event) }
            className="btn btn-primary"
          >Search Again</button>

          <Results movies={this.state.movies} />
        </div>
      )

    } else {

      return(
        <Search
          handleSubmitQuery={(event) => this.onSubmitQuery(event)}
          handleSearchInput={(event) => this.onSearchInput(event)}
          query={this.state.query} />
      )


    }
  }
}

export default SearchContainer
