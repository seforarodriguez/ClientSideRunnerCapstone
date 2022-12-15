
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getRunners } from "../../managers/RunnersManager"

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
        <article className="runners">
            {
                runners.map(runner => {
                    return <section key={`runner--${runner.id}`} className="runner">
                        <div className="runner__name">This runner is called:{runner.runner_full_name}</div>
                        <div className="runner__miles">This runner has done {runner.mileage} miles </div>
                        <div className="runner__miles">This runner's expertese is level ....??? </div>
                        <div className="runner__miles">This runner has done a few events so far </div>
                        <div className="runner__miles">Here goes a link for the events hes done</div>
                        
                        <button className="button" onClick={() => {
                            // deleteRunner(runner.id).then(updateRunnerList)
                            }}> See Their Events </button>
                    </section>
                })
            }
        </article>
    )
}