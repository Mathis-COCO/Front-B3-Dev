import React from "react";
import Navbar from "./Navbar.tsx";
import Filters from "./Filters.tsx";
import '../css/Topnav.css'
import { useNavigate } from "react-router-dom";

const NavFilter = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <Filters></Filters>
            <div className="add-product-btn">
                <button onClick={() => navigate("/create_article")}>+</button>
            </div>
        </div>

    )
}

export default NavFilter