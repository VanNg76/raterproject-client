import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getGameById, saveEditGame } from "./GameManager"
import { useHistory } from "react-router-dom"


export const EditGameForm = () => {
    const { gameId } = useParams()
    const [editGame, setEditGame] = useState({})
    const history = useHistory()

    useEffect(
        () => {
            if (gameId) {
                getGameById(parseInt(gameId))
                    .then(g => setEditGame(g))
            }
    }, [gameId])


    const changeGameState = (domEvent) => {
        // TODO: Complete the onChange function
        const copy = {...editGame}      // Create a copy
        copy[domEvent.target.name] = domEvent.target.value   // Modify copy
        setEditGame(copy)     // Set copy as new state
    }

    return (
        <form className="editGameForm">
            <h2 className="editGameForm">Edit Game Form</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={editGame.title}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={editGame.description}
                        onChange={changeGameState} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={editGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number of Players: </label>
                    <input type="number" name="number_of_players" required autoFocus className="form-control"
                        value={editGame.number_of_players}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year of Released: </label>
                    <input type="number" name="year_released" required autoFocus className="form-control"
                        value={editGame.year_released}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_recommendation">Age recommendation: </label>
                    <input type="number" name="age_recommendation" required autoFocus className="form-control"
                        value={editGame.age_recommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimate_time_to_play">Estimate time to play: </label>
                    <input type="number" name="estimate_time_to_play" required autoFocus className="form-control"
                        value={editGame.estimate_time_to_play}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Send POST request to your API
                    saveEditGame(gameId, editGame)
                        .then(() => history.push("/games"))
                }}>Done</button>
        </form>
    )
}
