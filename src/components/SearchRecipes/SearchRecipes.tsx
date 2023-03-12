import React, { useState } from 'react';
import { Recipe } from './types';
import axios from 'axios';
// import { Container } from '@material-ui/core';
import { Navbar } from '../Navbar'
import image from '../../assets/images/cookingware.png'
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';


const API_KEY = 'e0f42628cba34466aaa2557ec5621f39';

// // const auth = useAuth();
// const classes = useStyles();
// // const { history } = props;
// const [open, setOpen] = useState(false);

const useStyles = makeStyles({
    googleButton:{
        backgroundColor: '#4ba399',
        marginTop: '2em',
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        border: 'none',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        // shadowColor: '#52006A', 
        fontSize: '16px',
        lineHeight: '48px',
        display: 'block',
        borderRadius: '1px',
        fontFamily: 'Roboto, arial, sans-serif',
        cursor: 'pointer'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },
    typographyStyle: {
        fontFamily: 'Roboto, arial, sans-serif;',
        textAlign: 'center',
        fontSize: '2em'
    },
    containerStyle: {
        marginTop: '2em',
        // zIndex: 2
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    },

    background: {
        backgroundImage: `url(${image})`,
        bacgroundSize: 'cover',
        backgroundPosition: 'center center',
        // backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        // width: '100%',
        // height: '90%',
        // backgroundPosition: 'top',
        backgroundSize: '100vh',
        // position: 'fixed',
        // opacity: 0.5,
        zIndex: -1,
        width: '100vw',
        // marginTop:'-90px',
        height: '100vh',
        // position: 'absolute'
    },

    forMat : {
        backgroundColor : 'red'
    }

});

// const auth = useAuth();
// const classes = useStyles();
// const { history } = props;
// const [open, setOpen] = useState(false);



export  async function searchRecipes(query: string): Promise<Recipe[]> {
  const response = await axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}`);
  const results = response.data.results;
  // const classes = useStyles();
  const recipes = results.map((result: any) => ({
    id: result.id,
    title: result.title,
    image: result.image,
    ingredients: [],
    instructions: [],
  }));
  return recipes;
}

export async function getRecipeDetails(id: number): Promise<Recipe> {
  const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
  // const classes = useStyles();
  const recipe = {
    id: response.data.id,
    title: response.data.title,
    image: response.data.image,
    ingredients: response.data.extendedIngredients.map((ingredient: any) => ingredient.originalString),
    instructions: response.data.analyzedInstructions[0].steps.map((step: any) => step.step),
  };
  return recipe;
}

function SearchBar() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  async function handleSearch() {
    const results = await searchRecipes(query);
    setRecipes(results);
  }

  return (
    <div>
    <Navbar />
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '200px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>Search by ingredient that you would like to use</div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={{ margin: '1rem', padding: '1rem', border: '1px solid black' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>{recipe.title}</h2>
            <img src={`https://${recipe.image}`} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
            <p style={{ marginTop: '0.5rem' }}>Ready in minutes</p>
          </div>
        ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default SearchBar;



{/* <div >

<div>
  <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
  <button onClick={handleSearch}>Search</button>
  {recipes.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
    </div>
  ))}
</div>
</div>
);
} */}