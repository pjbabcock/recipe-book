import React from 'react';

export default function Instructions(props) {
    return (
        <ol>
            {props.selectedRecipe ? props.selectedRecipe.instructions.map(instruction => <li key={instruction}>{instruction}</li>) : ''}
        </ol>
    )
};