// Store is the redux version of State

import { Store } from '@material-ui/icons';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import combStore from './slices/combinedStores';
import {reducer} from './slices/RootSlice'

// let reducer = combStore

// export const store = configureStore({
//     reducer : combStore,
//     // reducer2 : reducer2},
//     devTools: true
// })

// export const store


// switch (store) {
//     case './Inventory':
//         return store = configureStore({
//                 reducer : reducer1,
//                 //this is an object
//                 devTools: true})
    
//     case './SignUp':
//         const store = configureStore({
//                 reducer : reducer2,
//                 devTools: true
//             })
//         }

export const store = configureStore({
    reducer,
    //this is an object
    devTools: true
})

// export const store2 = configureStore({
//     reducer : reducer2,
//     devTools: true
// })


    // reducer2,
    // devTools: true)


// export const store