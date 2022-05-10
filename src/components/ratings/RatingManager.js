export const getRatings = () => {
    return fetch("http://localhost:8000/ratings", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`
        }
    })
        .then(response => response.json())
}

export const createRating = (rate) => {
    return fetch(`http://localhost:8000/rates`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("rater")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(rate)
     })
        .then(response => response.json())
}
