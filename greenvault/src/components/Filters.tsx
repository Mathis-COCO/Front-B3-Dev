import React from "react";
import '../css/Topnav.css'
import Groups from "../js/Groups";

const Filters = () => {

    return (
        <div className="filters-c-items">
            <div className="dropdown">
                <Groups />
            </div>
        </div>
    )
}

export default Filters