export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(res => res.json())
}

export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(response => response.json())
}

export const createGame = (game) => {
    return fetch("http://localhost:8000/games", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(game)
     })
        .then(response => response.json())
}

export const saveEditGame = (gameId, newGame) => {
    return fetch(`http://localhost:8000/games/${gameId}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newGame)
    })
}

export const deleteGame = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
}

export const getCategories = () => {
    return fetch(`http://localhost:8000/categoryGames`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(res => res.json())
}

export const getCategoryGamesByGameId = (gameId) => {
    return fetch(`http://localhost:8000/categoryGames?gameId=${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(res => res.json())
}