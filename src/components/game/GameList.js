import React, { useEffect, useState } from "react"
import { getGames } from "./GameManager.js"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { Game } from "./Game.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>

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
