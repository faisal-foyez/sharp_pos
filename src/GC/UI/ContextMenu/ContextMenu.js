import React from 'react';
import classes from './ContextMenu.module.css';
const ContextMenu = (props) =>{

    return(
        <div style={{...props.style}} className={classes.contextContainer}>
            <ul>
                {
                    props.data.map(item=>{
                        return <li onClick={(e)=>props.itemClick(e,item.name)}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default  ContextMenu;