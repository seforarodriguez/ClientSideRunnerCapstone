
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { attendingEvent, deleteEvent, getEvents, notAttendingEvent, updateEvent } from "../../managers/EventsManager"
import { getLoggedInRunner, getRunners } from "../../managers/RunnersManager"


export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const [ currentRunner, setCurrentRunner ] = useState([])

    const navigate = useNavigate()
    

    const updateEventList = () => {
        getEvents().then(data => setEvents(data))
    }

    useEffect(() => {
        updateEventList()
    }, [])

    useEffect(() => {
        getLoggedInRunner().then(data => setCurrentRunner(data))
    }, [])


    


    return (
        <article className="allEvents">
            <section>
                <button className="button" onClick={() => {navigate("/events/new")}}> New Running Event</button>
                    
            </section>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="eachEvent">
                        <div className="event__title">{event.title}</div>
                        <div className="event__park">Run will be at {event?.park?.name}</div>
                        <div className="event__time">See you on {event.date} at {event.time}</div>
                        <div className="event__pace">Running Pace for this run: {event.pace_of_run} min/mile</div>
                        <div className="event__miles">Get ready! We're going to be running {event.miles_to_run} miles! </div>
                        <div className="event_organizer">Organized by {event?.organizer?.runner_full_name}</div>

                        {events?.attendees.map(attendee => {
                            attendee.id === currentRunner.id ?
                                <button className="button" onClick={() => {
                                notAttendingEvent(event.id)
                                }}> Already Going! </button>
                            : <button className="button" onClick={() => {
                                attendingEvent(event.id)
                                }}> I want to run this! </button>
                        })} 

                        <button className="button" onClick={() => {
                            deleteEvent(event.id).then(updateEventList)
                            }}> 🗑 </button>
                    </section>
                })
            }
        </article>
    )
}