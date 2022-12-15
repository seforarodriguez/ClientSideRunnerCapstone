export const getParks = () => {
    return fetch("http://localhost:8000/parks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}
  