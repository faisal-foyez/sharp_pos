import React from 'react';

import classes from './Button.module.css';

const button = (props) => (
    <button
        onKeyUp={(e) => props.onBtnKeyUp(e)}
        disabled={props.disabled}
        style={{...props.style}}
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;