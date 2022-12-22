import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>

            {props.image && <div className="icon">
                <img src={props.image} />
            </div>}
            {props.title && <p className='title'>{props.title}</p>}
            {props.info && <p className='info'>{props.info}</p>}
            {props.imageMain && <img src={props.imageMain} className="main" />}
        </div >
    )
}

export default Card