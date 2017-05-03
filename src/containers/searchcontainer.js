import React, {Component} from 'react'
import {queryOmdb} from '../services/utilities'
import Search from '../components/search'

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
    return(
          <Search
            handleSubmitQuery={(event) => this.onSubmitQuery(event)}
            handleSearchInput={(event) => this.onSearchInput(event)}
            query={this.state.query} />
    )
  }
}

export default SearchContainer
