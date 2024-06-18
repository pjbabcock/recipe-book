import React from 'react';

export default function IngredientsDisplay(props) {
    return (
        <ul>
            {props.selectedRecipe ? props.selectedRecipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>) : ''}
        </ul>
    )
};