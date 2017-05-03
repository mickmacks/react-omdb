import React, {Component} from 'react'

class Search extends Component {
  constructor () {
    super()
    this.state={
      query: ''
    }
  }
  onSearchSubmit (event){
    event.preventDefault()
    console.log('searched!')
  }
  onInputChange (event){
    this.setState({
      query: event.target.value
    })
    console.log(this.state.query)
  }

  render() {
    return (
      <div className="searchForm">
        <form onSubmit={event => this.onSearchSubmit(event)}
            className="search">
          <input
          onChange={event => this.onInputChange(event)}
          type="text"
          placeholder="type to search"
          value={this.state.query} />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Search;
