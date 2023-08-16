export const getRunners = () => {
    return fetch("http://https://seashell-app-6vvpc.ondigitalocean.app/runners", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}
  