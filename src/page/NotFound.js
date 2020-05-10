import React from 'react';
import Footer from '../component/Footer';

import logo from '../image/roueAnim.svg';

const NotFound = () => {
    return(
        <div>
            <h2>Not Found</h2>
            <h3>Ooooops</h3>
        <div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>

        <Footer />
   
        </div>
    )
}
export default NotFound;