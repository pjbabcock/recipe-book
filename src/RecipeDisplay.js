import React, {useState} from 'react';
import IngredientsDisplay from './IngredientsDisplay';
import RecipeName from './RecipeName';
import Instructions from './Instructions';
import RecipeDetails from './RecipeDetails';
import SearchBox from './SearchBox';
import {recipes} from './AllRecipes';

export default function RecipeDisplay() {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState();

    return (
        <>
            <SearchBox selectedRecipe={selectedRecipe} handleSearch={() => setSelectedRecipe(recipes.find(item => item.name === searchTerm))} handleSearchTermChange={({target}) => setSearchTerm(target.value)}/>
            <RecipeName selectedRecipe={selectedRecipe}/>
            <RecipeDetails selectedRecipe={selectedRecipe}/>
            <IngredientsDisplay selectedRecipe={selectedRecipe}/>
            <Instructions selectedRecipe={selectedRecipe}/>
        </>
    )
};