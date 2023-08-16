import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (


        <div className="container red topBotomBordersOut">
            <a className="nav-aa" href="/runners">Runners</a>
            <a className="nav-aa" href="/parks">Parks</a>
            <a className="nav-aa" href="/events">Running Events</a>
            {
                (localStorage.getItem("runner_token") !== null) ?

                    <button className="button-55"
                        onClick={() => {
                            localStorage.removeItem("runner_token")
                            navigate('/login')
                        }}
                    >Logout</button>
                    :
                    <>
                        <a className="nav-aa" href="/login">Login</a>
                        <a className="nav-aa" href="/register">Register</a>
                    </>
            }</div>
    )
}