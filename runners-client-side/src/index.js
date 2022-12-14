import './index.css';
import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import RunnerApp from './RunnerApp';

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>
        <RunnerApp />
    </BrowserRouter>
)
