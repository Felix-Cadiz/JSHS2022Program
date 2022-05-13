import React from "react"
import ReactDom from "react-dom/client"
import {Routes, Route, NavLink, BrowserRouter as Router} from "react-router-dom"
import "./index.css"

import {
    Home,
    Performers,
    Support,
    Program
} from "./components"

const App = () => {
    return <>
    <div className="topNav">
        <a href="https://www.jsusd.org/" target="/blank">
            <img className="jsLogo" src="images/swettLogo.png" alt="JSUSD Logo"/>
        </a>
        <h1 className="header">John Swett USD 2022 <br/> Spring Concert</h1>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/program">Program</NavLink>
            <NavLink to="/performers">Performers</NavLink>
            <NavLink to="/support">Support</NavLink>
        </nav>
    </div>
        <Routes>
            <Route path="/" exact element={ <Home />} />
            <Route path="/performers" exact element={ <Performers />} />
            <Route path="/support" exact element={ <Support />} />
            <Route path="/program" exact element={ <Program />} />
        </Routes>
    </>
}

const app = ReactDom.createRoot(document.getElementById("app"))
app.render(
    <Router>
        <App />
    </Router>,
)