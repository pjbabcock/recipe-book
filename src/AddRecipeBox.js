import React, {useState} from 'react';
import {recipes} from './AllRecipes';
import AddIngredients from './AddIngredients';
import AddInstructions from './AddInstructions';

export default function AddRecipeBox() {
    const [recipeName, setRecipeName] = useState('');
    const handleNameChange = ({target}) => {
        setRecipeName(target.value);
    }

    const [cookingTime, setCookingTime] = useState();
    const handleCookingTimeChange = ({target}) => {
        setCookingTime(target.value);
    }

    const [servings, setServings] = useState();
    const handleServingsChange = ({target}) => {
        setServings(target.value);
    }

    const [calories, setCalories] = useState();
    const handleCaloriesChange = ({target}) => {
        setCalories(target.value);
    }

    var ingredientsArray = []
    const [ingredients, setIngredients] = useState(ingredientsArray);

    var nextIngredientKey = 1
    const handleNewIngredient = (e) => {
        if (e.code === 'Enter') {
            setIngredientsBoxes(prevIngredientsBoxes => prevIngredientsBoxes.concat([<AddIngredients id={`Ingredient${nextIngredientKey}`} key={nextIngredientKey} handleNewIngredient={handleNewIngredient} />]));
            nextIngredientKey++
            console.log('nextIngredientKey is '+nextIngredientKey)
        }
    }
    const [ingredientsBoxes, setIngredientsBoxes] = useState([<AddIngredients id='Ingredient0' key={0} handleNewIngredient={handleNewIngredient} />]);

    var nextInstructionKey = 1
    const handleNewInstruction = (e) => {
        if (e.code === 'Enter') {
            setInstructionsBoxes(prevInstructionsBoxes => prevInstructionsBoxes.concat([<AddInstructions id={`Instruction${nextInstructionKey}`} key={nextInstructionKey} handleNewInstruction={handleNewInstruction} />]));
            nextInstructionKey++
            console.log('nextInstructionKey is '+nextInstructionKey)
        }
    }
    const [instructionsBoxes, setInstructionsBoxes] =useState([<AddInstructions id='Instruction0' key={0} handleNewInstruction={handleNewInstruction} />]);

    function AddRecipe() {
        for (let i = 0; i < nextIngredientKey; i++) {
            ingredientsArray.push(document.getElementById(`Ingredient${i}`).value);
            console.log(nextIngredientKey);
            console.log(ingredientsArray);
        };

        setIngredients(ingredientsArray);

        recipes.push(
            {
                name: recipeName,
                cookingTime: cookingTime,
                servings: servings,
                servingCalories: calories,
                ingredients: ingredients,
                instuctions: []
            }
        );
        console.log(recipes);
        document.getElementById('AddRecipeBox').classList.add('hidden');
    }

    function cancelAddRecipe() {
        document.getElementById('AddRecipeBox').classList.add('hidden');
    }
    
    return (
        <div id='AddRecipeBox' className='hidden'>
            <br />
            <label htmlFor='recipename'>Name: </label>
            <input type='text' id ='recipename' name='recipename' onChange={handleNameChange}></input>
            <br />
            <label htmlFor='cookingtime'>Cooking time: </label>
            <input type='text' id='cookingtime' name='cookingtime' onChange={handleCookingTimeChange}></input>
            <br />
            <label htmlFor='servings'>Servings: </label>
            <input type='text' id='servings' name='servings' onChange={handleServingsChange}></input>
            <br />
            <label htmlFor='calories'>Calories per serving: </label>
            <input type='text' id='calories' name='calories' onChange={handleCaloriesChange}></input>
            <br />
            <label htmlFor='Ingredient0'>Ingredients:</label>
            <br />
            {ingredientsBoxes}
            <label htmlFor='Instruction0'>Instructions:</label>
            <br />
            {instructionsBoxes}
            <button type='button' name='add' onClick={AddRecipe}>Add</button>
            <button type='button' name='cancel' onClick={cancelAddRecipe}>Cancel</button>
        </div>
    )
};