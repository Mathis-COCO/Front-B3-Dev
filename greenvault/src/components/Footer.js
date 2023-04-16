import React from "react";
import '../css/Footer.css';
import logo from '../images/gv-small-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {

    return (
        <div className='footer'>
            <div className="footer-main-div">
                <div className="inline">
                    <img className="footer-logo" src={logo} alt="Footer Logo" />
                    <p>© GreenVault 2023</p>                    
                </div>
                <div className="socials">
                    <FontAwesomeIcon icon="fa-brands fa-instagram" />
                </div>

                <p className='footer-members'>ABEILLE, CLOUX, COCO, GAUTHIER</p>
            </div>
        </div>
    )
}

export default Footer