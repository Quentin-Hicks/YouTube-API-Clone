import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchVideo, setSearchVideo] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        props.filterVideos(searchVideo)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={searchVideo} onChange={(e) => setSearchVideo(e.target.value)} type='text' placeholder='Search...'></input>
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar