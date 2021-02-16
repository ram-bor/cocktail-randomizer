import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <ul>
                <li>Icon: {props.icon}</li>
                <li>Name: {props.name}</li>
                <li>Glass: {props.glass}</li>
                <li>Ingredients: {props.ingredients}</li>
                <li>Instructions: {props.instructions}</li>
            </ul>
        </div>
    )
}
