import React from 'react';

export default function AddRecipeButton() {
    function showAddRecipeBox() {
        document.getElementById('AddRecipeBox').classList.remove('hidden');
    }

    return (
        <button type='button' onClick={showAddRecipeBox}>Add Recipe</button>
    );
};