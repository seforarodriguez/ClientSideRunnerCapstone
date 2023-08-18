import { useState, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleEvent, updateEvent } from "../../managers/EventsManager"



export const EventUpdate = () => {
    const navigate = useNavigate()
    const [currentEvent, setCurrentEvent] = useState({})
    const {eventId} = useParams()
   


    useEffect(() => {
        //fetching the park options for the events
        getSingleEvent(eventId).then(data => setCurrentEvent(data))
    }, [])

    
    const changeEventState = (domEvent) => {
            const copy = {...currentEvent}
            copy[domEvent.target.id] = domEvent.target.value
            setCurrentEvent(copy)
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">We have to change the time or day of the Event?</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date of the Event: </label>
                    <input type="date" id="date" required autoFocus className="form-control"
                        value={currentEvent.date}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" id="time" required autoFocus className="form-control"
                        value={currentEvent.time}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            
          
            
           
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        id:eventId,
                        dateOfRunEvent:currentEvent.date,
                        timeOfRunEvent:currentEvent.time
                    }

                    // Send POST request to your API
                    updateEvent(event)
                        .then(() => navigate("/events"))
                }}
                className="btn btn-primary">Create new Event to Run</button>
        </form>
    )
}