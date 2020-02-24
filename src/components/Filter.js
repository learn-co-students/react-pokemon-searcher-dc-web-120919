import React from 'react'


const Filter = (props) => {

    return (
        <button className={props.color} onClick={(e)=>props.onClick(e, props.type, props.color)}>{props.type}</button>
    )

}

export default Filter