import React from 'react';
import Facebook from '../image/facebookColor.png';
import Instagram from '../image/instaColor.png';
import Twitter from '../image/twitterColor.png';
import Whatsapp from '../image/whatsappColor.png';
const Footer = () => {
    return(
        <div>
            <footer>
        <img className="logo-footer" src={Facebook} alt='logo de Facebook' />
        <img className="logo-footer" src={Instagram} alt="logo d'Instagram" />
        <img className="logo-footer" src={Twitter} alt='logo de Twitter' />
        <img className="logo-footer" src={Whatsapp} alt='logo de Whatsapp' />
        </footer>
        </div>
    )
}
export default Footer;