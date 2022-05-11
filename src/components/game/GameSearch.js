import React from "react"

export const GameSearch = ({searchTerms, onSearchTermChange}) => {

    return (
        <>
            <div>Search for a game:</div>
            <input type="text" className="games__search"
                value={searchTerms}
                onKeyUp={
                    (event) => {
                        if (event.keyCode === 13) {
                            onSearchTermChange(event.target.value)
                        }
                    }
                }
                placeholder="Enter search string here..." />
        </>
    )
}
