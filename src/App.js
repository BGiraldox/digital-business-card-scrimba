import React from "react"
import Profile from "./components/Profile"
import Description from "./components/Description"
import Footer from "./components/Footer"

export default function App() {
    return (
        <div className="container">
            <Profile/>
            <Description/>
            <Footer/>
        </div>
    )
}