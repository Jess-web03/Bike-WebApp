import React from 'react';
import { Trans } from 'react-i18next';

const Progress = (props) => {
    return(
        <div>
            <h4><Trans i18nKey='question' /> {props.current} / {props.total}</h4>
        </div>
    )
}

export default Progress;