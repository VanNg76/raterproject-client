import React, { useState } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createRating } from './RatingManager'


export const RatingForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [rate, setRate] = useState({})

    const changeRateState = (domEvent) => {
        domEvent.preventDefault()

        const newRate = {...rate}      // Create a copy
        if (domEvent.target.value > 0 && domEvent.target.value <= 10) {
            newRate[domEvent.target.name] = parseInt(domEvent.target.value)
        } else {
            window.alert("Please enter 1-10")
        }
        newRate.game = parseInt(gameId)
        setRate(newRate)     // Set copy as new state
    }

    const saveRate = () => {
        createRating(rate)
            .then(() => history.push(`/games/${gameId}`))
    }

    return (
        <form className="rateForm">
            <h2 className="rateForm">Rate Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rate">Rate level (1-10): </label>
                    <input type="number" name="rate" required autoFocus placeholder="1-10" className="form-control"
                        min={1} max ={10}
                        onChange={changeRateState}
                    />
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    saveRate()

            }}>Send Rate</button>
        </form>
    )
}
