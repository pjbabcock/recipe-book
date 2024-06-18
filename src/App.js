import React from 'react';
import AddRecipeButton from './AddRecipeButton';
import RecipeDisplay from './RecipeDisplay';
import AddRecipesBox from './AddRecipeBox';

export default function App() {
  return (
    <div>
      <AddRecipeButton />
      <AddRecipesBox />
      <RecipeDisplay />
    </div>
  );
}