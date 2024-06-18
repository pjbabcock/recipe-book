import React from 'react';

export default function AddIngredients(props) {
   return (
        <>
            <input autoFocus type='text' id={props.id} name='ingredient' onKeyDown={props.handleNewIngredient} ></input>
            <br />
        </>
    )
}