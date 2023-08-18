export const getParks = () => {
    return fetch("https://seashell-app-6vvpc.ondigitalocean.app/parks", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}
  