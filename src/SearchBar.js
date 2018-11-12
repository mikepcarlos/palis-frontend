import React from 'react';

const SearchBar = (props) => {

  const prevent = (e) => {
    e.preventDefault()
    props.handleSubmit(e, props.searchTerm)
  }

  return(
    <div className="Search">
      <form onSubmit={prevent}>
        <input onChange={props.handleChange} className="SearchBar" type="search" placeholder="Search..." value={props.searchTerm}/>
      </form>
    </div>
  )
}

export default SearchBar
