import { apiKey } from './details';

export const fetchMeal = (searchQuery: string) => {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`)
    .then(res => res.json())
    .then(json => json);
}