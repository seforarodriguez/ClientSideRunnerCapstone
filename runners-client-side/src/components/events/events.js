
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getEvents } from "../../managers/EventsManager"


export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()

    const updateEventList = () => {
        getEvents().then(data => setEvents(data))
    }

    useEffect(() => {
        updateEventList()
    }, [])


    return (
        <article className="allEvents">
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="eachEvent">
                        <div className="event__title">{event.title}</div>
                        <div className="event__park">{event?.park?.name} gotta add the name Here</div>
                        <div className="event__time">See you on {event.date} at {event.time} hours</div>
                        <div className="event__pace">Running Pace for this run: {event.pace_of_run} min/mile</div>
                        <div className="event__miles">Get ready! We're going to be running {event.miles_to_run} miles! </div>
                        <div className="event_organizer">Organized by {event?.organizer?.runner_full_name}</div>

                                            
                        <button className="button" onClick={() => {
                            // deleteEvent(event.id).then(updateEventList)
                            }}> See Their Events </button>
                    </section>
                })
            }
        </article>
    )
}