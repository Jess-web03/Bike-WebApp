import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ()=>{
    const { i18n } = useTranslation('common');
    function test() {
        console.log("Je teste le bouton!");
      }
    return(
        <div>
            <input onClick={test} id='btn' type='button' value='Mon bouton test' />
            <button onClick={() => i18n.changeLanguage('de')}>fr</button>
        </div>
    )
}
export default Button;