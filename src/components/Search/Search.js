import React from 'react'

const Search = ({setSearch}) => {
    return (
        <form className="d-flex">
            <input onChange={
                    (e) => {
                        setSearch(e.target.value);
                    }
                }
                className="form-control me-2 rounded-pill"
                type="search"
                placeholder="Search Character Name"
                aria-label="Search"/>

        </form>
    )
}

export default Search
