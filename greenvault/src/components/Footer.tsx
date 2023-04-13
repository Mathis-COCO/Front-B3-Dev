import React from "react";
import '../css/App.css';
import logo from '../images/gv-small-logo.png'

const Footer = () => {

    return (
        <div className='footer'>
            <div className="inline">
                <div>
                    <img className="navbar-c-logo" src={logo} alt="Footer Logo" />
                </div>
                <div>
                    <p>© GreenVault 2023</p>
                    <p>ABEILLE, CLOUX, COCO, GAUTHIER</p>
                </div>
            </div>
        </div>
    )
}

export default Footer