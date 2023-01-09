
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { attendingEvent, deleteEvent, getEvents, notAttendingEvent, updateEvent } from "../../managers/EventsManager"


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
        <article className="allEvents">
            <section>
                <button className="button" onClick={() => {navigate("/events/new")}}> New Running Event</button>
                <button className="button" onClick={() => {goingToEvent === false? setGoingToEvent(true): setGoingToEvent(false)}}> My Scheduled eVENTS</button>
                    
            </section>
            {
                filteredEvents.map(event => {
                    return <section key={`event--${event.id}`} className="eachEvent">
                        <div className="event__title">{event.title}</div>
                        <div className="event__park">{event?.park?.name} gotta add the name Here</div>
                        <div className="event__time">See you on {event.date} at {event.time} hours</div>
                        <div className="event__pace">Running Pace for this run: {event.pace_of_run} min/mile</div>
                        <div className="event__miles">Get ready! We're going to be running {event.miles_to_run} miles! </div>
                        <div className="event_organizer">Organized by {event?.organizer?.runner_full_name}</div>

                        {event?.going ? <button className='button' onClick={(ev)=>notAttendingEvent(event.id).then(updateEventList)}>Already attending, unattend? </button>                    
                        :<button className='button' onClick={(ev)=>attendingEvent(event.id).then(updateEventList)}> Attend</button>}
                        
                        <button className="button" onClick={() => {
                            deleteEvent(event.id).then(updateEventList)
                            }}> 🗑 </button>
                        <button className="button" onClick={() => {
                            navigate(`/events/edit/${event.id}`)
                            }}> Change Date or Time </button>
                    </section>
                })
            }
        </article>
    )
}