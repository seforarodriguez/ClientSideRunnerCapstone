import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()
    return (
        <ul className="navbar">
            <li className="navbar__item">
            <Link className="nav-link" to="/login">Runners</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/register">Parks</Link>
            </li>
            <li className="navbar__item">
            <Link className="nav-link" to="/login">Running Events</Link>
            </li>
            {
                (localStorage.getItem("runner_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("runner_token")
                                navigate('/login')
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}