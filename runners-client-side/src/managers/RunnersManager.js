export const getRunners = () => {
    return fetch("http://localhost:8000/runners", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}
  