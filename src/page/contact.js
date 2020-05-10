import React,{useState} from 'react';
import { Trans } from 'react-i18next';
import {useForm} from 'react-hook-form';
import Slide from 'react-reveal/Slide';
import Footer from '../component/Footer';
import Input from '../style/Input';
import Home from '../image/home.png';
import Squab from '../image/squab.png';

const Contact = (props) => {
    const [userVisible, setUserVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(true)
    const { register, handleSubmit} = useForm();
 
    const onSubmit = data => {
        setUserVisible(true);
        setFormVisible(false);
         let name = data.name;
         console.log(name);
        };
     
    return(
        <div>
             <Slide top>
            <h2>Contact</h2>
            </Slide>

    <div class="box">
        <div>
      {userVisible ? <p><Trans i18nKey='merci' /></p> : null}
      {formVisible ?
        <form onSubmit={handleSubmit(onSubmit)} >
        <label for="name">
        FirstName
        <br />
        <input ref={register} type="text" id="name" name="name" value={props.name} required />
        </label>
        <br />
        <label for="email">
        Email
        <br />
        <input ref={register} type="text" id="email" name="email" value={props.email} required />
        </label>
        <br />
        <label for="message">
        Message
        <br />
        <textarea ref={register} id="message" name="message" value={props.message} />
        </label>
        <br />
        <Input type="submit" value="Submit" />
        
        </form>
        : null}
       
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

//action="http://localhost:3003/contact" method="post" enctype="text/plain"
