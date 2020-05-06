import React from 'react';
import Answer from '../quiz/Answer';
const Answers = (props) => {
    return(
        <div>
            <Answer letter="A" 
                    answer={props.question.answer_a} 
                    handleClick={props.handleClick}
                    selected={props.currentAnswer === 'A'} />

            <Answer letter="B" 
                    answer={props.question.answer_b} 
                    handleClick={props.handleClick}
                    selected={props.currentAnswer === 'B'} />

            <Answer letter="C" 
                    answer={props.question.answer_c} 
                    handleClick={props.handleClick}
                    selected={props.currentAnswer === 'C'} />
        </div>
    )
}

export default Answers;