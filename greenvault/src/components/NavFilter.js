import React from "react";
import Navbar from "./Navbar.js";
import Filters from "./Filters.js";
import '../css/Topnav.css'
import { useNavigate } from "react-router-dom";

const NavFilter = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar></Navbar>
            <Filters></Filters>
            <div className="add-product-btn">
                <button onClick={() => navigate("/create_article")}>
                    <span className="add-text">ajouter</span>
                    <span className="plus-icon">+</span>
                </button>
            </div>
        </div>
    )
}

export default NavFilter