import React,{useState} from 'react';
import { Trans } from 'react-i18next';
import Progress from '../quiz/Progress';
import QuestionQuiz from '../quiz/Question';
import Answers from '../quiz/Answers';
import Z from '../image/suricate.png';


const ContainerQuiz = () => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResult, setShowResult] = useState();

    const questions = [
        {
          questionId: 1,  
          question:'My name is ?',
          answer_a:'Jessica',
          answer_b:'Vanessa',
          answer_c:'Melissa',
          correct:'A',
             
        },
        {
            questionId: 2,
            question:'My second name is ?',
            answer_a:'Louisa',
            answer_b:'Antonella',
            answer_c:'Sofia',
            correct:'C',
             
        },
        {
            questionId: 3,
            question:'My favourite color is ?',
            answer_a:'Green',
            answer_b:'Purple',
            answer_c:'Yellow',
            correct:'B',
             
        },
        {
            question:'My favourite fruit ?',
            answer_a:'Cherry',
            answer_b:'Apple',
            answer_c:'Mango',
            correct:'C',
            questionId: 4
        },
        {
            question:'My favourite animal ?',
            answer_a:'Tiger',
            answer_b:'Cat',
            answer_c:'Lion',
            correct:'A', 
            questionId: 5
        },
        {
            question:'My month birthday is ?',
            answer_a:'October',
            answer_b:'September',
            answer_c:'November',
            correct:'A' ,
            questionId: 6
        },
        {
            question:'My favourite series ?',
            answer_a:'Orange is the new black',
            answer_b:'The Good place',
            answer_c:'Friends',
            correct:'A',
            questionId: 7
        },
        {
            question:'I usually drink ?',
            answer_a:'Water',
            answer_b:'Vodka',
            answer_c:'Bier',
            correct:'A' ,
            questionId: 8
        },
        {
            question:'The name of my first cat is ?',
            answer_a:'Cramique',
            answer_b:'Madara',
            answer_c:'Lady',
            correct:'A' ,
            questionId: 9  
        },
        {
            question:'The name of my boyfriend is ?',
            answer_a:'Andy',
            answer_b:'Zachary',
            answer_c:'Luis',
            correct:'B' ,
            questionId: 10 
        },
        {
            question:'I have never been to ?',
            answer_a:'Perou',
            answer_b:'Swiss',
            answer_c:'Danemark',
            correct:'C' ,
            questionId: 11  
        },
        {
            question:"I don't like ?",
            answer_a:'Cooking',
            answer_b:'Cleaning my room',
            answer_c:"Cleaning the cat's toilet",
            correct:"C" ,
            questionId: 12  
        },
        {
            question:"I dance on ?",
            answer_a:'Hip Hop',
            answer_b:'Zumba',
            answer_c:'Reggae',
            correct:'B' ,
            questionId: 13  
        },
        {
            question:"My default ?",
            answer_a:'Stubborn',
            answer_b:'Bad player',
            answer_c:'Shy',
            correct:"A" ,
            questionId: 14  
        },
        {
            question:"My city ?",
            answer_a:'Lima',
            answer_b:'Caracas',
            answer_c:'Bogota',
            correct:"B" ,
            questionId: 15 
        }
    ];
    const question = questions[currentQuestion];
    const handleClick = e => {
        setCurrentAnswer(e.target.value);
        setError();
    };

    const renderError = () => {
        if(!error){
            return;
        }
    return <div>{error}</div>
    }

    const renderResultPoint = (question, answer) => {
        if(question.correct === answer.answer){
            return <span>Correct</span>;
        }
        return <span>Failed</span>;
    }
    const renderResultData = () =>{
        return answers.map( answer =>{
            const question = questions.find(question => question.questionId === answer.questionId);
            return(
                <div key={question.id}>
                    
                    {question.question} - {renderResultPoint(question, answer)}
                </div>
            )
        }
        );
    }
    const restart = () => {
        setAnswers ([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResult(false);
    }
    const next = () =>{
        const answer = {questionId : question.questionId, answer : currentAnswer};

        if(!currentAnswer){
            setError('Select an option!');
            return;
        }
        answers.push(answer);
        setAnswers(answers);
        setCurrentAnswer('');
            if( currentQuestion +1 < questions.length){
                setCurrentQuestion(currentQuestion +1);
                return;
            }
            setShowResult(true);
    };
    if(showResult){
        return (
        <div>
            <h3>Result</h3>
            <img src={Z} alt='z' />
            {renderResultData()}
            <button className="btnMainQuiz" onClick={restart}>Restart</button>
        </div>
        )
    }else{
    return(
        <div>
            <Progress total={questions.length} current={currentQuestion + 1} />
            <QuestionQuiz question={question.question} />
            {renderError()}
            <Answers question={question}
                     currentAnswer={currentAnswer}
                     handleClick={handleClick} />
            <button className="btnMainQuiz" onClick={next}><Trans i18nKey="confirm" /></button>

        </div>
    )
  }
}

export default ContainerQuiz;
