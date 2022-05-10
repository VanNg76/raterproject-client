import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createReview } from './ReviewManager'


export const ReviewForm = () => {
    const history = useHistory()
    const { gameId } = useParams()
    const [review, setReview] = useState({})

    const changeReviewState = (domEvent) => {
        domEvent.preventDefault()

        const newReview = {...review}      // Create a copy
        newReview[domEvent.target.name] = domEvent.target.value
        newReview.game = parseInt(gameId)
        setReview(newReview)     // Set copy as new state
    }

    const saveReview = () => {
        createReview(review)
            .then(() => history.push(`/games/${gameId}`))
    }

    return (
        <form className="reviewForm">
            <h2 className="reviewForm__review">Review Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review: </label>
                    <textarea type="text" name="review" required autoFocus className="form-control"
                        onChange={changeReviewState}
                    ></textarea>
                </div>
            </fieldset>

            <button type="submit" className="btn btn-primary"
                onClick={evt => {
                    evt.preventDefault()
                    saveReview()

            }}>Save</button>
        </form>
    )
}
