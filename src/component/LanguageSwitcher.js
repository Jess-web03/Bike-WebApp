import React ,{useState} from 'react';
import { Trans } from 'react-i18next';
import { useTranslation } from 'react-i18next';
import Button from '../style/Button';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../style/theme';
import { GlobalStyles } from '../style/global';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng) => {
    await i18n.changeLanguage(lng); // i18n.changeLanguage retourne une Promise
  };


  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  return (
    <div>
       <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
       <GlobalStyles />
      <button onClick={() => changeLanguage('en')} className="btn-lang">En</button>
      <button onClick={() => changeLanguage('de')} className="btn-lang">Fr</button>
      <button onClick={() => changeLanguage('nl')} className="btn-lang">Nl</button>
   
      <Button onClick={toggleTheme}><Trans i18nKey="toggleTheme" /></Button>
      </ThemeProvider>
    </div>
  );
}  

export default LanguageSwitcher;