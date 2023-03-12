import axios from 'axios';

import { renderEditInputCell } from "@material-ui/data-grid";

let token = '81f90123d47a0a3337d3e048a5453e9fba925f45e1260c42';
// import axios from 'axios';

const API_KEY = 'e0f42628cba34466aaa2557ec5621f39';

//EVERY SINGLE ONE OF THESE METHODAS  ARE KEY:VALUE PAIRS (GET, POST, ETC)

//GET
export const server_calls = {
    get: async () => { 
        const response = await fetch('https://nettle-remarkable-jumpsuit.glitch.me/api/myrecipes', {
            method: 'GET',
            headers: {  
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}` 
            }
        });

        //Error handling
        if (!response.ok) {
            throw new Error('Failed to fetch data from server') 
        }

        return await response.json()
    },


    //CREATE



    create: async(data: any = {}) => { 
        const response = await fetch('https://nettle-remarkable-jumpsuit.glitch.me/api/myrecipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data) 
        }); 

        if(!response.ok){
            throw new Error('Failed to Create new data on server');
        }

        return await response.json()
    },


    //UPDATE

    update: async(id:string, data: any = {}) => { //we are passing an 'id' variable because we need to let the sapp know which contact we are 
                                            //updating
        const response = await fetch(`https://nettle-remarkable-jumpsuit.glitch.me/api/myrecipes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },

            body: JSON.stringify(data)
        });
    },

    delete: async(id: string) => {
        const response = await fetch(`https://nettle-remarkable-jumpsuit.glitch.me/api/myrecipes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    },


    ////////////////////



    createUser: async(data: any = {}) => { 
        const response = await fetch('https://expensive-amusing-havarti.glitch.me/auth2/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // '' : ''
            },
            

            body: JSON.stringify(data) //this is all part of the data we are sending on 'fetch' and this particular line 
                        //makes our data readable in JSON and storing it under ' body'
        }); //WATCH OUT FOR THIS PART

        if(!response.ok){
            throw new Error('Failed to Create new data on server');
        }

        return await response.json()
        },

        // ////////

    // searchRec: async function searchRecipes(query: string): Promise<Recipe[]> {
    //     const response = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}`);
      
    //     return response.data.results;
    //   },


    // getRec: async function getRecipeDetails(recipeId: number): Promise<RecipeDetails> {
    //     const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);
      
    //     return response.data;
    //   }
}


// import axios from 'axios';

// const API_KEY = 'e0f42628cba34466aaa2557ec5621f39';

// async function searchRecipes(query: string): Promise<Recipe[]> {
//   const response = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}`);

//   return response.data.results;
// }

// async function getRecipeDetails(recipeId: number): Promise<RecipeDetails> {
//   const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}`);

//   return response.data;
// }