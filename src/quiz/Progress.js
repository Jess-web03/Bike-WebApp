import React from 'react';

const Progress = (props) => {
    return(
        <div>
            <h4>Question {props.current} of {props.total}</h4>
        </div>
    )
}

export default Progress;