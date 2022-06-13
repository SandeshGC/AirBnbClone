import React from "react"
import AirBnbIcon from "../images/airbnb-logo.png"
function NavBar(){
    return(
        <nav className="nav-bar">
            <img src={AirBnbIcon} id="airbnb-logo" />
        </nav>
    )
}
export default NavBar;