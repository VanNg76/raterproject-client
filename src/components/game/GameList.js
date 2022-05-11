import React, { useEffect, useState } from "react"
import { getGames, getGamesBySearchTerm, getGamesOrderBy } from "./GameManager.js"
import { useHistory } from "react-router-dom"
import { Game } from "./Game.js"
import { GameSearch } from "./GameSearch.js"

export const GameList = () => {
    const [ games, setGames ] = useState([])
    const history = useHistory()
    const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(()=> {
        if (searchTerm.length > 1) {
            getGamesBySearchTerm(searchTerm).then(g => setGames(g))
        } else {
            getGames().then(g => setGames(g))
        }
    }, [searchTerm])

    const onSearchTermChange = (value) => {
        setSearchTerm(value)
    }

    const handleControlledInputChange = (domEvent) => {
        domEvent.preventDefault()
        getGamesOrderBy(domEvent.target.value)
            .then(g => setGames(g))
    }

    return (
        <>
            <div>
                <GameSearch onSearchTermChange={onSearchTermChange} searchTerm={searchTerm} />
            </div>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>

            <select name="orderby" className="form-control"
                onChange={handleControlledInputChange}>
                <option value="">Select a sort field</option>
                <option value="year_released">Released year</option>
                <option value="designer">Designer</option>
                <option value="estimate_time_to_play">Estimate time to play</option>
            </select>

            <div style={{ marginTop: "2rem"}}>
                <div className="games">
                    {
                        games.map(game => <Game key={game.id} game={game} />)
                    }
                </div>
            </div>

        </>
        )
}
