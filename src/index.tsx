import React from 'react'; //type rfc
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home, Contact, About, SignIn, SignOut, SignUp, Recipes } from './components'
import SearchBar, {searchRecipes, getRecipeDetails} from './components/SearchRecipes/SearchRecipes';
import './style.css'
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
// import {store2} from './redux/store2';
import {store } from './redux/store';
// import { reducer, reducer2 } from './redux/slices/RootSlice';
// import combStore from './redux/slices/combinedStores';


let myTitle = "Ivan's cooking book"

// let test = {store, store2}

// let store = combStore

ReactDOM.render(
  <React.StrictMode>
  <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
  <Provider store={store}>
    <Router>
      <Switch>

      <Route exact path="/">
        <Home title={myTitle} />
      </Route>
      <Route path='/recipes'>
        <Recipes></Recipes>
      </Route>
      <Route path='/searchrecipes'>
        <SearchBar></SearchBar>
      </Route>
      <Route path='/contact'>
        <Contact></Contact>
      </Route>
      <Route path='/about'>
        <About></About>
      </Route>
      <Route path='/signin'>
        <SignIn></SignIn>
      </Route>
      <Route path='/signout'>
        <SignOut></SignOut>
      </Route>
      <Route path='/signup'>
        <SignUp ></SignUp>
      </Route>

      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

