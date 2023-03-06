import React from "react";
import Navbar from "./Navbar.tsx";
import Filters from "./Filters.tsx";
import '../css/Topnav.css'

const NavFilter = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Filters></Filters>            
        </div>

    )
}

export default NavFilter