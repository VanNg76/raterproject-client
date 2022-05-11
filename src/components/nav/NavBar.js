import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router-dom"

export const NavBar = () => {
    const history = useHistory()
    return (
        <div className="navbar">
            <div className="navbar__item active">
                <Link className="navbar__link" to="/">GamerRater</Link>
            </div>
            <div className="navbar__item">
                <Link className="navbar__link" to="/games">Games</Link>
            </div>
        
            {
                (localStorage.getItem("rater") !== null) ?
                    <button className="nav-link fakeLink"
                        onClick={() => {
                            localStorage.removeItem("rater")
                            history.push({ pathname: "/" })
                        }}
                    >Logout</button>
                : null
            }
        </div>
    )
}
