console.log('made it to search.js from container')

import React, {Component} from 'react'
// add css

class Search extends Component {
  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchForm">
        <form onSubmit={(event) => handleSubmitQuery(event)}
            className="search">
          <input
          onChange={(event) => handleSearchInput(event)}
          type="text"
          placeholder="search for a movie title"
          value={query} />
            <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search;
