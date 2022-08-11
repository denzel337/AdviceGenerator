import React from 'react';

const fetchAdvice(){
    fetch('https://api.adviceslip.com/advice').then(response => {
        response.json();
    }).then(data => {
        data.advice;
    })
}