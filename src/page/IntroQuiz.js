import React from 'react';
import { Trans } from 'react-i18next';
import Bounce from 'react-reveal/Bounce';
import Question from '../image/question-mark.png';

const IntroQuiz = () => {
    return(
        <div>
            <Bounce bottom>
            <img id="quizImg" src={Question} alt="question" />
            </Bounce>
            <p><Trans i18nKey="joue" /></p>
            <p><Trans i18nKey="test" /></p>
        </div>
    )
}

export default IntroQuiz;