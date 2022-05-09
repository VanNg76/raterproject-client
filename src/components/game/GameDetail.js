import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"

import { getGameById, deleteGame } from "./GameManager"

export const GameDetail = () => {
    const [game, setGame] = useState({})
    const { gameId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getGameById(gameId)
            .then(setGame)
    }, [gameId])

    return (
        <>
            <h3 className="game__title">{game.title}</h3>
            <div className="game__players">{game.number_of_players} players needed</div>
            <div className="game__year_released">This game was released in {game.year_released} and recommend for age of {game.age_recommendation}</div>
            <div className="game__categories">
                {
                    game.categories?.map(c => {
                        return <div key={c.id}> {c.label} </div>
                    })
                }
            </div>
            <button className="btn edit-game" onClick={() => {
                history.push(`/games/edit/${game.id}`)
            }}>Edit</button>
            <button className="btn delete-game" onClick={(evt) => 
                {
                    evt.preventDefault()
                    deleteGame(game.id)
                        .then(() => {
                            history.push("/games")
                        })
                }}>Delete</button>
        </>
    )
}
