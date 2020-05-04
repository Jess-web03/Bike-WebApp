import React from 'react';
import { Router, Link } from '@reach/router';
import Home from '../page/home';
import Information from '../page/information';
import Contact from '../page/contact';
import Mecano from '../page/mecano';

import NotFound from '../page/NotFound';
import Navbar from '../style/Navbar';

import HomeNav from '../image/startHome.png';
import Cranium from '../image/cranium2.png';
import Screw from '../image/outil.png';
import Phone from '../image/letters2.png';

const Nav = () =>{
    const paths = {
        default:'*',
        home: '/',
        information: 'information',
        mecano: 'mecano',
        contact: 'contact',
      };
    return(
        <div>
            <Navbar>
            
                <ul>
                    <li>  
                        <Link to={paths.home}><img className="logoNav" src={HomeNav} alt="logo home" /></Link>
                    </li>
                    <li>  
                        <Link to={paths.information}><img className="logoNav" src={Cranium} alt="logo cranium" /></Link>
                    </li>
                    <li>  
                        <Link to={paths.mecano}><img className="logoNav" src={Screw} alt="logo screw" /></Link>
                    </li>
                    <li>  
                        <Link to={paths.contact}><img className="logoNav" src={Phone} alt="logo phone" /></Link>
                    </li>
                    </ul>
                    </Navbar>
    <Router>
   
        <Home path={paths.home} exact />
        <Information path={paths.information} exact  />
        <Mecano path={paths.mecano}/>
        <Contact path={paths.contact} exact  />
        <NotFound default />
    </Router>
        
            
         



        </div>
    )
}

export default Nav;
