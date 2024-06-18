import React from 'react';

export default function AddInstructions(props) {
   return (
        <>
            <input autoFocus type='text' id={props.id} name='instruction' onKeyDown={props.handleNewInstruction}></input>
            <br />
        </>
    )
}