import React from 'react';
//import { Trans } from 'react-i18next';
//import EqualDivider from '../style/EqualDivider';
//import Child from '../style/Child';
import Slide from 'react-reveal/Slide';
import Footer from '../component/Footer';

import Home from '../image/home.png';
import Squab from '../image/squab.png';
const Contact = () => {
    return(
        <div>
             <Slide top>
            <h2>Contact</h2>
            </Slide>

    <div class="box">
        <div>
          <p>Pseudo</p>
          <p>Adresse Email</p>
          <p>Message</p>
        </div>

        <div>
        <img id="homeContact" src={Home} alt="une maison" />
        </div>
    </div>      
    <img src={Squab} id="squab" alt="un pigeon" />  

        <div id="green"></div>
        <div id="orange"></div>
        <Footer />
        </div>
    )
}
export default Contact;