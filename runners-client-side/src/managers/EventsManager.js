export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}
  