import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { createEvent } from "../../managers/EventsManager"
import { getParks } from "../../managers/ParksManager"
import "./events.css"


export const EventForm = () => {
    const navigate = useNavigate()
    const [currentEvent, setCurrentEvent] = useState({
        title: "",
        parkId: 0,
        date: "",
        time: "",
        runMiles:0,
        runPace:0
    })
    const [park, setPark] =useState([])


    useEffect(() => {
        //fetching the park options for the events
        getParks().then(data => setPark(data))
    }, [])

    
    const changeEventState = (domEvent) => {
    // how do I make the variables to be standard for the changeEvent state? 
    //with the event. target.id because it was set in the id input.
            const copy = {...currentEvent}
            copy[domEvent.target.id] = domEvent.target.value
            setCurrentEvent(copy)
    }

    return (
        <form className="eventForm form--events form-control">
            <h2 className="eventForm__title">Register New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="park">Parks Available: </label>
                    <select name="park" id="parkId" className="form-control" 
                    value={currentEvent.parkId} onChange={changeEventState}>
                        <option value="0">Select a park</option>
                            {
                                park.map(
                                    park => <option key={park.id} value={park.id}>{park.name} Zipcode {park.zipcode}</option>
                                )
                            }
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" required autoFocus className="form-control"
                        value={currentEvent.title}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
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
            <fieldset>
                <div className="form-group">
                    <label htmlFor="runPace">RunPace: </label>
                    <input type="text" id="runPace" placeholder="Only enter mins/mile ex. 11" required autoFocus className="form-control"
                        value={currentEvent.runPace}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="runMiles">RunMiles: </label>
                    <input type="text" id="runMiles" placeholder="Only enter miles ex. 5" required autoFocus className="form-control"
                        value={currentEvent.runMiles}
                        onChange={changeEventState}
                    />
                </div>
            </fieldset>
            
          
            
           
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    const event = {
                        parkId: currentEvent.parkId,
                        eventTitle:currentEvent.title,
                        dateOfRunEvent:currentEvent.date,
                        timeOfRunEvent:currentEvent.time,
                        runningPaceInMiles:parseInt(currentEvent.runPace),
                        milesToRun: parseInt(currentEvent.runMiles)
                    }

                    // Send POST request to your API
                    createEvent(event)
                        .then(() => navigate("/events"))
                }}
                className="btn btn-primary">Create new Event to Run</button>
        </form>
    )
}