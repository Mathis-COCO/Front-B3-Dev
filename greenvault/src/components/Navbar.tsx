import React from "react";
import gvlogo from "../images/gv-small-logo.png";

const Navbar = () => {
    return (
        <div className="navbar-c-items">
            <img src={gvlogo} className="navbar-c-logo" alt='logo'/>
            <input placeholder='    Rechercher...' className='searchbar'></input>
            {/* <a href={Login}> */}
                {/* REFAIRE LA REDIRECT POUR QU'ELLE FONCTIONNE */}
                <button className='btn-register-login'>S'inscrire / Se connecter</button>
            {/* </a> */}
        </div>
    )
}

export default Navbar