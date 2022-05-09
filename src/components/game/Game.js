import React from "react"
import { Link } from "react-router-dom"


export const Game = ({game}) => (
    <section className="game">
        <h3 className="game__title">
            <Link to={`/games/${game.id}`}>{game.title}</Link>
        </h3>
        <div className="game__players">{game.number_of_players} players needed</div>
    </section>
)
