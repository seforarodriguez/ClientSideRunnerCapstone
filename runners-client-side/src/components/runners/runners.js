
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getRunners } from "../../managers/RunnersManager"
import "./runners.css"

export const RunnerList = (props) => {
    const [ runners, setRunners ] = useState([])
    const navigate = useNavigate()

    const updateRunnerList = () => {
        getRunners().then(data => setRunners(data))
    }

    //i will have a button to redirect to the running events
    //the running events view will make a request to the server to get the events with a specific id
    //the events recieved should be only the ones made by that runner
    
    //each runner should have a list with the id's of the events they've done
  
    useEffect(() => {
        updateRunnerList()
    }, [])


    return (
        <article className="runners_container">
            {
                runners.map(runner => {
                    return <section key={`runner--${runner.id}`} className="eachRunner">
                        <div className="runner__name">{runner.runner_full_name}</div>
                        <div className="runner__miles details">Has ran: {runner.mileage} miles </div>
                        <div className="runner__expertise details"> Coming Soon... a preview of the events they have been to </div>
                        <div className="runner__events details"> Coming Soon... Favorite Parks </div>
                        
                        <button className="button-32 details" onClick={() => {
                            navigate(`/events`)
                            }}> See Their Events </button>
                    </section>
                })
            }
        </article>
    )
}