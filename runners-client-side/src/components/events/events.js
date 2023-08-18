
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { attendingEvent, deleteEvent, getEvents, notAttendingEvent } from "../../managers/EventsManager"
import "./events.css"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()
    const [filteredEvents, setFilteredEvents] = useState([])
    const [ goingToEvent, setGoingToEvent ] = useState(false)

    const updateEventList = () => {
        getEvents().then(data => setEvents(data))
    }
    const updateFilteredList = () => {
        getEvents().then(data => setEvents(data))
    }



    useEffect(() => {
        updateEventList()
    }, [])
    
    useEffect(() => {
        if (events.length) {
            setFilteredEvents(events)
        }
    }, [events])

    useEffect(() => {
        if (goingToEvent) {
            const allMyRunsArray = events.filter(event => event.going === true)
            setFilteredEvents(allMyRunsArray)
        } else {
            setFilteredEvents(events)
        }

    }, [goingToEvent])


    return (
        <>
        <section className="buttons_container">
                <button className="button-32" onClick={() => {navigate("/events/new")}}> New Running Event</button>
                <button className="button-32" onClick={() => {goingToEvent === false? setGoingToEvent(true): setGoingToEvent(false)}}>Events Attending</button>
                    
        </section>
        <article className="events_container">
            {
                filteredEvents.map(event => {
                    return <section key={`event--${event.id}`} className="eachEvent">
                        <section className="items_inside">
                            <div className="event__title">{event.title}</div>
                            <div className="details event__park">Where: {event?.park?.name}</div>
                            <div className="details event__time">See you on {event.date} at {event.time} hours</div>
                            <div className="details event__pace">Running Pace for this run: {event.pace_of_run} min/mile</div>
                            <div className="details event__miles">Get ready! We're going to be running {event.miles_to_run} miles! </div>
                            <div className="details event_organizer">Organized by {event?.organizer?.runner_full_name}</div>
                        </section>

                        <section className="items_inside">
                            {event?.going ? <button className='button-32' onClick={(ev)=>notAttendingEvent(event.id).then(updateEventList)}>Already attending, unattend? </button>                    
                            :<button className='button-32' onClick={(ev)=>attendingEvent(event.id).then(updateEventList)}> Attend</button>}
                            
                            <button className="button-32" onClick={() => {
                                navigate(`/events/edit/${event.id}`)
                            }}> Change Date or Time </button>
                            <button className="button-32" onClick={() => {
                                deleteEvent(event.id).then(updateEventList)
                            }}> 🗑 </button>
                        </section>
                    </section>
                })
            }
        </article>
        </>
    )
}