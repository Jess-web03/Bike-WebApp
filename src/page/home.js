import React from 'react';
import { Trans } from 'react-i18next';
import '../App.css';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

import Footer from '../component/Footer';
import Landscape from '../image/landscape.jpg';
import Electricity from '../image/electricity.jpg';
import NightCat from '../image/night-star.jpg';
import Eyes from '../image/eyes.png';
import Girl from '../image/girl.png';
import BicycleGirl from '../image/bicycleGirl.png';
import Clothing from '../image/clothing.png';
import Van from '../image/van.png';
import BikeMain from '../image/bicycleRedHome.png';


const Home = () => {



    return(
        <div>
           
        <Slide top>
          <h1><Trans i18nKey='home.homeBike' /></h1>
        </Slide>  
        <Fade left>
        <img id="bikeMain" src={BikeMain} alt="main red bike" />
        </Fade>

          <div className="center">
                 <img className="img-Home" id="img-landscape" src={Landscape} alt="paysage" />
                 <img className="img-Home" src={Electricity} alt="electricité" />
                 <img className="img-Home" src={NightCat} alt="nuit avec un chat" />
              </div>   
      
      
        
        <p className="motto"><Trans i18nKey='home.better' /></p>
        <p className="motto"><Trans i18nKey="home.try" /></p>

        <div className="boxCenter">
           <div> 
                <p id="auto" className="motto"><Trans i18nKey="home.auto" /></p>
            </div>
            <div>
                <div id="grisMotto" />
            </div>
        </div>

        <div className="boxCenter">
            <div>
                <div id="grisMotto2" />
            </div>
            <div>
            <p id="out" className="motto"><Trans i18nKey="home.out" /></p>
            </div>
        </div>

        <div className="center">
        <img id="van" src={Van} alt="un van" />
        </div>

        <Fade left>
        <h3><Trans i18nKey="home.story" /></h3>
        </Fade>
                <div className="center">
                <img id="eyes" className="img-Home" src={Eyes} alt="un regard" />
               
                </div>
             
               

                <div className="boxCenter">
                    <div>
                    <Zoom right>
                        <p id="story"><Trans i18nKey='home.storyTeam' />
                        </p>
                    </Zoom>    
                </div>
                <div>
                <div id="gris" />
                </div>
                </div>

                <Fade left>
                <h3><Trans i18nKey='home.team' /></h3>
                </Fade>
                <div className="center">

                <div className="boxContainer">
                 <div>  
                 <Fade left>  
                <img className="img-Team" src={Girl} alt="une nana" />
                </Fade>  
                </div> 

                <div className="box">
                <div>
                <p className="bold">Sofia</p>
                </div>
                <div>
                <p><Trans i18nKey='home.sofia' />
                </p>
                <p>Front End Developer</p>
                </div>
                </div>
                </div>

                <hr />
                <div className="boxContainerReverse">
                <div>
                <Fade right> 
                <img className="img-Team" id="bicycleGirl" src={BicycleGirl} alt="une nana sur un vélo rose" />
                </Fade>
                </div>
                <div className="boxReverse">
                <div>
                <p className="bold">Mélissa</p>
                </div>
                <div>
                <p>  <Trans i18nKey='home.melissa' />

                </p>
                <p>Designer</p>
                 </div>
                 </div>
                 </div>

                <hr />
                 <div className="boxContainer">
                <div>
                <Fade left>
                <img className="img-Team" id="umbrellaGirl" src={Clothing} alt="une nana avec un parapluie" />
                </Fade>
                </div>
                <div className="box">
                <div>
                <p className="bold">Vanessa</p>
                </div>
                <div>
                <p><Trans i18nKey='home.vanessa' />
                </p>
                <p>Social Media Manager</p>
                </div>
                </div>
                </div>


                </div>
                <div id="green"></div>
        <div id="orange"></div>
        <Footer />
        </div>
    )
}
export default Home;