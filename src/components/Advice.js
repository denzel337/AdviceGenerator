import React from 'react';

const Advice = (props) => {
    return (
    <div>
        <li>
            <div className='adviceText'>
            <h2>ADVICE #{props.id}</h2>
            </div>
            <div className='advice'>
            <q>{props.advice}</q>
            </div>
        </li>
        
    </div>
    )
}

export default Advice