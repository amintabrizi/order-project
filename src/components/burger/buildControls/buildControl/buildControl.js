import React from 'react';

import classes from './buildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disableHandler}>Less</button>
            <button
                className={classes.More}
                onClick={props.added}>More</button>
        </div>
    )
}

export default buildControl;