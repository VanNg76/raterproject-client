import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createGame } from './GameManager.js'


export const GameForm = () => {
    const history = useHistory()

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({})

    const changeGameState = (domEvent) => {
        domEvent.preventDefault()

        const newGame = {...currentGame}      // Create a copy
        newGame[domEvent.target.name] = domEvent.target.value
        setCurrentGame(newGame)     // Set copy as new state
    }

    const constructGame = () => {
        const game = {
            title: currentGame.title,
            description: currentGame.description,
            designer: currentGame.designer,
            number_of_players: parseInt(currentGame.numberOfPlayers),
            age_recommendation: parseInt(currentGame.ageRecommendation),
            year_released: parseInt(currentGame.yearReleased),
            estimate_time_to_play: parseInt(currentGame.estimateTimeToPlay)
        }

        // Send POST request to your API
        createGame(game)
            .then(() => history.push("/games"))
    }

    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="designer">Designer: </label>
                    <input type="text" name="designer" required autoFocus className="form-control"
                        value={currentGame.designer}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of players: </label>
                    <input type="number" name="numberOfPlayers" required autoFocus className="form-control"
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="yearReleased">Year released: </label>
                    <input type="number" name="yearReleased" required autoFocus className="form-control"
                        min={1990} max={2022}
                        value={currentGame.yearReleased}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ageRecommendation">Age recommendation: </label>
                    <input type="number" name="ageRecommendation" required autoFocus className="form-control"
                        value={currentGame.ageRecommendation}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estimateTimeToPlay">Estimate time to play (minutes): </label>
                    <input type="number" name="estimateTimeToPlay" required autoFocus className="form-control"
                        value={currentGame.estimateTimeToPlay}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()
                    constructGame()

                }}>Register</button>
        </form>
    )
}
