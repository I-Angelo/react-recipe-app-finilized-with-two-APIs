import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseEmail, chooseFirstname, chooseLastname, choosePassword } from '../../redux/slices/RootSlice2';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';


interface RegisterFormProps {
    id?:string;
    data?:{}
}


//Code below looks familiar because it is connecting with redux files

interface RegisterState {
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}

export const RegisterForm = (props:RegisterFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store2 = useStore();
    const name = useSelector<RegisterState>(state => state.email);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => { //when press 'submit' button
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.createUser(data); // props.id!,
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.replace('/SignIn')}, 1000); //this waits for a bit of time and then rteloads the page
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseEmail(data.email)); // dispatch is part of React
            console.log(`Updated:${data.email}`);
            dispatch(chooseFirstname(data.first_name));
            console.log(`Updated:${data.first_name}`);
            dispatch(chooseLastname(data.last_name));
            console.log(`Updated:${data.last_name}`);
            dispatch(choosePassword(data.password));
            console.log(`Updated:${data.password}`);
            server_calls.createUser(store2.getState()); //since this is the 'else' beacuse the contact doesnt exist then it will call the function to create the contact
            setTimeout( () => {window.location.replace('/signin')}, 7000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}> {/* This will run 'onSubmit' from line 33 and 31*/}
                <div>
                    <label htmlFor="email">Email</label>
                    <Input {...register('email')} name="email" placeholder='Email'/>
                </div>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <Input {...register('first_name')} name="first_name" placeholder='First Name'/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <Input {...register('last_name')} name="last_name" placeholder='Last Name'/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input {...register('password')} name="password" placeholder='Password'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}