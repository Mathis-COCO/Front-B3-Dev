import React from "react";
import gvlogo from "../images/gv-small-logo.png"
import '../css/Topnav.css'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

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
        <div className="navbar-c-items">
            <img src={gvlogo} className="navbar-c-logo" alt='logo'/>
            <button onClick={() => navigate("/articles")}>Tous les Articles</button>
            <button onClick={() => navigate("/create_article")}>ajouter Article</button>
            <input placeholder='    Rechercher...' className='searchbar'></input>
            <button onClick={() => navigate("/profile")}>Profile</button>
            {isLoggedIn ? (
                <button className='btn-register-login' onClick={handleLogout}>Se déconnecter</button>
            ) : (
                <button className='btn-register-login' onClick={() => navigate("/login")}>S'inscrire / Se connecter</button>
            )}
        </div>
    )
}

export default Navbar;
