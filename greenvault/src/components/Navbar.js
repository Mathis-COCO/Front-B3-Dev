import React from "react";
import gvlogo from "../images/gv-small-logo.png"
import '../css/Topnav.css'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
    const isLoggedIn = cookies.access_token !== undefined;
    console.log(cookies.access_token);
    

    const handleLogout = () => {

        removeCookie('access_token');
        navigate("/");  
    };

    return (
        <div>
            <div className="navbar-c-items">
                <div>
                    <img src={gvlogo} className="navbar-c-logo" onClick={() => navigate("/")} alt='logo'/>
                    <button className='grey-btn' onClick={() => navigate("/articles")}>Tous les Articles</button>
                </div>
                <div>
                    <input placeholder='    Rechercher...' className='searchbar'></input>
                </div>
                <div>
                    {isLoggedIn ? (
                        <div className="right-icons">
                            <button className='navbar-btns' onClick={() => navigate("/profile")}>
                                <FontAwesomeIcon className='navbar-right-icons' icon={faUser} />
                            </button>
                            <button className='navbar-btns' onClick={handleLogout}>
                                <FontAwesomeIcon className='navbar-right-icons' icon={faArrowRightFromBracket} />
                            </button>
                        </div>
                    ) : (
                        <button className='grey-btn' onClick={() => navigate("/login")}>S'inscrire / Se connecter</button>
                    )}
                </div>                    
            </div>
        </div>

    )
}

export default Navbar;
