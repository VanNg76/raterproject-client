export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(response => response.json())
}

export const getReviewsByGameId = (gameId) => {
    return fetch(`http://localhost:8000/reviews?game=${gameId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(response => response.json())
}

export const createReview = (review) => {
    return fetch(`http://localhost:8000/reviews`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(review)
     })
        .then(response => response.json())
}
