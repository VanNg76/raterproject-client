import React from "react"
import { Route } from "react-router-dom"
import { EditGameForm } from "./game/EditGameForm"
import { GameDetail } from "./game/GameDetail"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"
import { UploadPicture } from "./game/UploadPictureForm"
import { RatingForm } from "./ratings/RatingForm"
import { ReviewForm } from "./reviews/ReviewForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/games">
                <GameList />
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetail />
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route exact path="/games/edit/:gameId(\d+)">
                <EditGameForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/rate">
                <RatingForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)/upload">
                <UploadPicture />
            </Route>
            
        </main>
    </>
}