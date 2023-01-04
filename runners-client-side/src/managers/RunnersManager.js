export const getRunners = () => {
    return fetch("http://localhost:8000/runners", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}

export const getLoggedInRunner = () => {
    return fetch("http://localhost:8000/runners/logged_user", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}

  