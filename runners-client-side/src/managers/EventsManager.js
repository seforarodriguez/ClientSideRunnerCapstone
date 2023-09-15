export const getEvents = () => {
    return fetch("https://seashell-app-6vvpc.ondigitalocean.app/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}

export const createEvent = (event) => {
    return fetch("https://seashell-app-6vvpc.ondigitalocean.app/events", {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("runner_token")}`
            },
            body: JSON.stringify(event)
        })
        .then(response => response.json())
}

export const getSingleEvent = (id) => {
    return fetch(`https://seashell-app-6vvpc.ondigitalocean.app/events/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("runner_token")}`
        }
    })
        .then(response => response.json())
}

export const updateEvent = (event) => {
    return fetch(`https://seashell-app-6vvpc.ondigitalocean.app/events/${event.id}`, {
        method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("runner_token")}`
            },
            body: JSON.stringify(event)
        })
}

export const deleteEvent = (id) => {
    return fetch(`https://seashell-app-6vvpc.ondigitalocean.app/events/${id}`, {
        method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("runner_token")}`
            }
        })
}

export const notAttendingEvent = eventId => {
    return fetch(`https://seashell-app-6vvpc.ondigitalocean.app/events/${eventId}/unattend`, {
        method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("runner_token")}`
            }
        })
  }
  
  export const attendingEvent = eventId => {
    return fetch(`https://seashell-app-6vvpc.ondigitalocean.app/events/${eventId}/attend`, {
        method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("runner_token")}`
            },
            body: JSON.stringify(eventId)
        })
        .then(response => response.json())
  }