import React,{useState} from 'react';
import { Trans } from 'react-i18next';
import Progress from '../quiz/Progress';
import QuestionQuiz from '../quiz/Question';
import Answers from '../quiz/Answers';
import Z from '../image/suricate.png';
import BadgeF from '../image/badgeQueen.png';
import BadgeM from '../image/badgeKing.png';



const ContainerQuiz = () => {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [error, setError] = useState('');
    const [showResult, setShowResult] = useState();

    const questions = [
        {
          questionId: 1,  
          question:<Trans i18nKey='betweenTire' />,
          answer_a:<Trans i18nKey='innerTube' />,
          answer_b:<Trans i18nKey='pedal' />,
          answer_c:<Trans i18nKey='saddle' />,
          correct:'A',
             
        },
        {
            questionId: 2,
            question:<Trans i18nKey='rideTrack' />,
            answer_a:<Trans i18nKey='doWant' />,
            answer_b:<Trans i18nKey='no' />,
            answer_c:<Trans i18nKey='yes' />,
            correct:'C',
             
        },
        {
            questionId: 3,
            question:<Trans i18nKey='intruder' />,
            answer_a:<Trans i18nKey='handlebars' />,
            answer_b:<Trans i18nKey='motor' />,
            answer_c:<Trans i18nKey='frame' />,
            correct:'B',
             
        },
        {
            question:<Trans i18nKey='wearing' />,
            answer_a:<Trans i18nKey='decorate' />,
            answer_b:<Trans i18nKey='obligatory' />,
            answer_c:<Trans i18nKey='advised' />,
            correct:'C',
            questionId: 4
        },
        {
            question:<Trans i18nKey='seeThis' />,
            imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Belgian_road_sign_F9.svg/594px-Belgian_road_sign_F9.svg.png",
            answer_a:<Trans i18nKey='notMe' />,
            answer_b:<Trans i18nKey='crazyGo' />,
            answer_c:<Trans i18nKey='avoid' />,
            correct:'A', 
            questionId: 5
        },
        {
            question:<Trans i18nKey='changeDirection' />,
            answer_a:<Trans i18nKey='handSignal' />,
            answer_b:<Trans i18nKey='clown' />,
            answer_c:<Trans i18nKey='balance' />,
            correct:'A' ,
            questionId: 6
        },
        {
            question:<Trans i18nKey='possible' />,
            answer_a:<Trans i18nKey='rideTwo' />,
            answer_b:<Trans i18nKey='rideOne' />,
            answer_c:<Trans i18nKey='rideMany' />,
            correct:'A',
            questionId: 7
        },
        {
            question:<Trans i18nKey='orderAllTime' />,
            answer_a:<Trans i18nKey='saddle' />,
            answer_b:<Trans i18nKey='reflectors' />,
            answer_c:<Trans i18nKey='brakes' />,
            correct:'A' ,
            questionId: 8
        },
        {
            question:<Trans i18nKey='roadSign' />,
            imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/France_road_sign_M12b.svg/273px-France_road_sign_M12b.svg.png",
            answer_a:<Trans i18nKey='straight' />,
            answer_b:<Trans i18nKey='priority' />,
            answer_c:<Trans i18nKey='sawAlready' />,
            correct:'B' ,
            questionId: 9  
        },
        {
            question:<Trans i18nKey='oldSidewalk' />,
            answer_a:<Trans i18nKey='year9' />,
            answer_b:<Trans i18nKey='year10' />,
            answer_c:<Trans i18nKey='year12' />,
            correct:'B' ,
            questionId: 10 
        },
        {
            question:<Trans i18nKey='driveProhib' />,
            answer_a:<Trans i18nKey='notPossible' />,
            answer_b:<Trans i18nKey='goWrong' />,
            answer_c:<Trans i18nKey='whitePanel' />,
            correct:'C' ,
            questionId: 11  
        },
        {
            question:"Je veux passer au rouge ?",
            answer_a:"J'attends comme les voiture en tant que bon citoyen",
            answer_b:"Je me lance, pourquoi je m'arrêterai dans ma lancée ?",
            answer_c:"Je me lance si il y a un petit panneau triangulaire indicatif ",
            correct:"C" ,
            questionId: 12  
        },
        {
            question:<Trans i18nKey='crankset' />,
            answer_a:<Trans i18nKey='crank' />,
            answer_b:<Trans i18nKey='rearWheel' />,
            answer_c:<Trans i18nKey='frontWheel' />,
            correct:'B' ,
            questionId: 13  
        },
        {
            question:"Un sas cyclable devant le feu tricolore est réservé uniquement pour ?",
            answer_a:<Trans i18nKey='bikeOnly' />,
            answer_b:<Trans i18nKey='typeTwo' />,
            answer_c:<Trans i18nKey='placeKnow' />,
            correct:"A" ,
            questionId: 14  
        },
        {
            question:<Trans i18nKey='panel' />,
            imgSrc: "https://cdn.pixabay.com/photo/2013/07/13/13/16/bicycle-lane-160714_960_720.png",
            answer_a:<Trans i18nKey='canRide' />,
            answer_b:<Trans i18nKey='bikeSight' />,
            answer_c:<Trans i18nKey='seeNothing' />,
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
            <p>Choose your badge</p>
            <img className="img-badge" src={BadgeF} alt='badge Queen' />
            <img className="img-badge" src={BadgeM} alt='badge King' />
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
            <img src={question.imgSrc} alt="" />
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
