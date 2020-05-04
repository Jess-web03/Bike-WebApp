import React from 'react';
import Footer from '../component/Footer';

import { Trans } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

//import Paper from '@material-ui/core/Paper';
//import Grid from '@material-ui/core/Grid';
//import Hidden from '@material-ui/core/Hidden';

//import Button from '../style/Button';
import Question from '../image/question-mark.png';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Information = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <Slide top>
            <h2>Quiz</h2>
            </Slide>

            <Bounce bottom>
            <img id="quizImg" src={Question} alt="question" />
            </Bounce>
            <p><Trans i18nKey="joue" /></p>
            <p><Trans i18nKey="test" /></p>
            <button className="btn-rounded"><Trans i18nKey="start" /></button>
        <div id="green"></div>
        <div id="orange"></div>
       

      <Footer />
    </div>
   
    )
}
export default Information;