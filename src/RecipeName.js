import React from 'react';

export default function RecipeName(props) {
    return (
        <h1>
            {props.selectedRecipe ? props.selectedRecipe.name : ''}
        </h1>
    );
};