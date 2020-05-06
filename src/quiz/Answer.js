import React from 'react';

const Answer = (props) => {

    return(
        <div>
            <button className="btnQuizOption" value={props.letter} onClick={props.handleClick}>
                <span>{props.letter}</span> {props.answer}
            </button>
        </div>
    )
}

export default Answer;

