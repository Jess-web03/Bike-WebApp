import React ,{useState} from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyles } from './style/global';

import LanguageSwitcher from './component/LanguageSwitcher';

import Nav from './component/Nav';

function App() {

  const [theme] = useState('light');
  
  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
    <GlobalStyles />
      <LanguageSwitcher />
     <Nav />
      </>
      </ThemeProvider>
    </div>
  );
}

export default App;
