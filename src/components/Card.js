import React from 'react'

export const Card = (props) => {
    return (
        <div className='card'>
            <h2>{props.name}</h2>
            <h3>{props.status}</h3>
            <h3>{props.species}</h3>
            <img src={props.image} alt='Imagen del personaje'></img>
        </div>
    )
}
