import React from "react";
import Navbar from "./Navbar.js";
import Filters from "./Filters.js";
import '../css/Topnav.css'
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const NavFilter = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [cookies] = useCookies(['access_token']);
    const isLoggedIn = cookies.access_token !== undefined;

    return (
        <div>
            <Navbar></Navbar>
            <Filters></Filters>
            {location.pathname !== 'create_article' && isLoggedIn ? (
            <div className="add-product-btn">
                <button onClick={() => navigate("/create_article")}>
                    <span className="plus-icon">+</span>
                </button>
            </div>
            ) : (<></>)}
        </div>
    )
}

export default NavFilter