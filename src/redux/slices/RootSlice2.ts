import { createSlice } from '@reduxjs/toolkit';


const rootSlice2 = createSlice({
    name: "root",
    initialState: {
        email: "email",
        first_name : "first_name",
        last_name: "last_name",
        password: "password",
    },
    reducers: {
        chooseEmail: (state, action) => {state.email = action.payload},
        chooseFirstname: (state, action) => {state.first_name = action.payload},
        chooseLastname: (state, action) => {state.last_name = action.payload},
        choosePassword: (state, action) => {state.password = action.payload},
    }
})

export const reducer2 = rootSlice2.reducer;
export const {chooseEmail, chooseFirstname, chooseLastname, choosePassword } = rootSlice2.actions;

