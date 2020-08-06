import React, { useState } from 'react'

const Search = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleChanges = e => {
    setSearchText(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.set(searchText)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='search'>
        Search
        <input type='text' name='search' value={searchText} onChange={handleChanges} />
      </label>
      <button onClick={handleSubmit}>Search!</button>
    </form>
  )
}

export default Search