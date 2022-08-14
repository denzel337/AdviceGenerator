import React from 'react';

const Advice = (props) => {
    return (
    <div>
        <li>
            <div className='adviceText'>
            <h3>ADVICE #{props.id}</h3>
            </div>
            <div className='advice'>
            <q>{props.advice}</q>
            </div>
        </li>
        
    </div>
    )
}

export default Advice