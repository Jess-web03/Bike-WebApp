import React,{useState} from 'react';
import Footer from '../component/Footer';
import { Trans } from 'react-i18next';
import Slide from 'react-reveal/Slide';
import ContainerQuiz from '../quiz/ContainerQuiz';
import IntroQuiz from './IntroQuiz';

const Information = () => {
  const [quizVisible, setQuizVisible] = useState(false);
  const [introQuizVisible, setIntroQuizVisible] = useState(true);
  const [btnVisible, setBtnVisible] = useState(true);
  const showQuiz = () => {
    setQuizVisible(true);
    setIntroQuizVisible(false);
    setBtnVisible(false);
  }
    
    return(
        <div>
          <Slide top>
            <h2>Quiz</h2>
            </Slide>
    
            {introQuizVisible ? <IntroQuiz /> : null}
            {quizVisible ? <ContainerQuiz /> : null}
            {btnVisible ?
            <button className="btn-rounded" onClick={showQuiz}><Trans i18nKey="start" /></button>
            : null}
            
        <div id="green"></div>
        <div id="orange"></div>
      <Footer />
    </div>
   
    )
}
export default Information;
