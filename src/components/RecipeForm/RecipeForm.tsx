import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseIngredients, chooseInstructions, chooseNotes } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface RecipeFormProps {
    id?:string;
    data?:{}
}


//Code below looks familiar because it is connecting with redux files

interface ContactState {
    name: string;
    ingredient: string;
    instructions: string;
    notes: string;
    // grain: string;
}

export const RecipeForm = (props:RecipeFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<ContactState>(state => state.name);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => { //when press 'submit' button
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 7000); //this waits for a bit of time and then rteloads the page
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseName(data.name)); // dispatch is part of React
            dispatch(chooseIngredients(data.ingredients));
            dispatch(chooseInstructions(data.instructions));
            dispatch(chooseNotes(data.notes));
            server_calls.create(store.getState()); //since this is the 'else' beacuse the contact doesnt exist then it will call the function to create the contact
            setTimeout( () => {window.location.reload()}, 7000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}> {/* This will run 'onSubmit' from line 33 and 31*/}
                <div>
                    <label htmlFor="name">Name of your dish</label>
                    <Input {...register('name')} name="name" placeholder='What are we creating'/>
                </div>
                <div>
                    <label htmlFor="ingredients">Ingredients</label>
                    <Input {...register('ingredients')} name="ingredients" placeholder='What goes in the dish?'/>
                </div>
                <div>
                    <label htmlFor="instructions">Instructions</label>
                    <Input {...register('instructions')} name="instructions" placeholder='How do we cook it?'/>
                </div>
                <div>
                    <label htmlFor="notes">Additional Notes</label>
                    <Input {...register('notes')} name="notes" placeholder='Additional notes'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

