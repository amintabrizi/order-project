import React from 'react';

import classes from './buildControls.module.css';
import BuildControl from './buildControl/buildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => {

    return (

        <div className={classes.BuildControls}>
            <div className="price">Current Price: <strong>{props.price}</strong></div>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disableHandler={(props.ingredients[ctrl.type]) <= 0 ? true : false}
                />
            ))}
            <button onClick={props.modalHandler} disabled={props.ingredientsCount() <= 0 ? true : false} className={classes.OrderButton}>Order</button>
        </div>
    )
}

export default buildControls;