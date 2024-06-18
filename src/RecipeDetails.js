import React from 'react';

export default function RecipeDetails(props) {
    return (
        <>
            <p>{props.selectedRecipe ? `Cooking Time: ${props.selectedRecipe.cookingTime} minutes` : ''}</p>
            <p>{props.selectedRecipe ? `Servings: ${props.selectedRecipe.servings}` : ''}</p>
            <p>{props.selectedRecipe ? `Calories: ${props.selectedRecipe.servingCalories}` : ''}</p>
        </>
    )
};