
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getParks } from "../../managers/ParksManager"

export const ParkList = (props) => {
    const [ parks, setParks ] = useState([])
    const navigate = useNavigate()

    const updateParkList = () => {
        getParks().then(data => setParks(data))
    }

    //i will have a button to redirect to the running events
    //the running events view will make a request to the server to get the events with a specific id
    //the events recieved should be only the ones made by that park
    
    //each park should have a list with the id's of the events they've done
  
    useEffect(() => {
        updateParkList()
    }, [])


    return (
        <article className="parks">
            {
                parks.map(park => {
                    return <section key={`park--${park.id}`} className="park">
                        <div className="park__name">This park is called:{park.name}</div>
                        <div className="park__address">{park.address}</div>
                        <div className="park__city">{park.city}, {park.zipcode}</div>
                        <div className="park__county">{park.county}</div>
                        <div className="park__miles">This park has {park.miles_available_to_run} miles available to run</div>
                        <div className="park__difficulty">Level of difficulty: {park.difficulty}</div>

                        
                        <button className="button" onClick={() => {
                            // deletePark(park.id).then(updateParkList)
                            }}> See Their Events </button>
                    </section>
                })
            }
        </article>
    )
}