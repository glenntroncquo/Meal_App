import React from 'react';
import { apiKey } from './details';

let myMeal = {};

let results = [];

export const fetchMeal = (searchQuery: string) => {
    // return(
        
    // )
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`)
    .then(res => res.json())
    .then(data => console.log(data));
}