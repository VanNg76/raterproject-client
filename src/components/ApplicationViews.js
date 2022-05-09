import React from "react"
import { Route } from "react-router-dom"
import { EditGameForm } from "./game/EditGameForm"
import { GameDetail } from "./game/GameDetail"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"


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

            
        </main>
    </>
}