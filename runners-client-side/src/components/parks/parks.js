
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getParks } from "../../managers/ParksManager"
import "./parks.css"

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
        <article className="parks_container">
            {
                parks.map(park => {
                    return <section key={`park--${park.id}`} className="eachPark">
                        <div className="park__name">{park.name}</div>
                        <div className="details park__address">{park.address}</div>
                        <div className="details park__city">{park.city}, {park.zipcode}</div>
                        <div className="details park__county">{park.county}</div>
                        <div className="details park__miles">This park has {park.miles_available_to_run} miles available to run</div>
                        <div className="details park__difficulty">Level of difficulty: {park.difficulty}</div>

                        
                        {/* <button className="button-53 details" onClick={() => {
                            navigate(`/events`)
                            }}> See Events Available </button> */}
                    </section>
                })
            }
        </article>
    )
}