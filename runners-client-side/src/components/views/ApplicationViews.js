import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { EventForm } from "../events/eventForm"
import { EventList } from "../events/events"
import { MainPage } from "../mainPage/MainPage"
import { ParkList } from "../parks/parks"
import { RunnerList } from "../runners/runners"
import { Authorized } from "./Authorized"


export const ApplicationViews = () => {
    return <>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<Authorized />}>
                {<Route path="/" element={<MainPage />} />}
                {<Route path="/runners" element={<RunnerList />} />}
                {<Route path="/parks" element={<ParkList />} />}
                {<Route path="/events" element={<EventList />} />}
                {<Route path="/events/new" element={<EventForm />} />}
                
            </Route>
        </Routes>
    </>
}