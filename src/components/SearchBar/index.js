import React from 'react'
import SearchBar from "material-ui-search-bar";

const SearchComponent = () => {
    return (
        <div>
            <SearchBar
                onChange={() => console.log('onChange')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        </div>
    )
}

export default SearchComponent