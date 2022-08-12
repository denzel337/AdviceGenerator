import React from 'react';

const Advice = (props) => {
    return (
    <div className='adviceBox'>
        <li>
            <p>{props.id}</p>
            <h2>{props.advice}</h2>
        </li>
    </div>
    )
}

export default Advice