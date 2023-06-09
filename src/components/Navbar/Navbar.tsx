import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Digits from '../../assets/images/cooking_logo.jpeg';
import { AuthCheck } from 'reactfire';



const useStyles = makeStyles({
    logo: {
        content: `url(${Digits})`,
        maxWidth: '20%',
        height: 'auto',
    },
    navlogo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },
    navbar: {
        backgroundColor: '#54b0b0',
        zIndex: 1,
        borderBottom: '1px solid grey',
    },
    navbarItem: {
        color: 'yellow',
        textDecoration: 'none',
    },
    p5: {
        padding: '5px',
    },
    spaceBetween: {
        justifyContent: 'space-evenly',
    },
    alignCenter: {
        alignItems: 'center'
    },
    ul: {
        listStyleType: 'none',
    },
    width60: {
        width: '60%',
    },
    width100: {
        width: '100%',
    },
    psides: {
        paddingRight: '10px',
        paddingLeft: '10px',
    },
    button_text: {
        color: 'white',
        textDecoration: 'none',
    },
})

export const Navbar = () => {

    const classes = useStyles();

    return (
        <div className={`${classes.row} ${classes.navbar} ${classes.width100} ${classes.alignCenter} ${classes.p5} ${classes.spaceBetween}`}>
            <div className={`${classes.navlogo}`}>
                <Link to='/' className={`${classes.logo} ${classes.p5}`} />
            </div>
            <div className={`${classes.width60} ${classes.alignCenter}`}>
                <ul className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides} }`} >
                    <Suspense fallback={'loading...'}>
                        <AuthCheck fallback={
                            <div className={`${classes.ul} ${classes.row} ${classes.spaceBetween} ${classes.psides} }`} >
                            <li>
                            <Button>
                                <Link to='/SignIn' className={`${classes.navbarItem} ${classes.psides}`}>Sign In</Link>
                            </Button>
                            </li>
                            <li>
                            <Button>
                            <Link to='/SignUp' className={`${classes.navbarItem} ${classes.psides}`}>Sign Up</Link>
                            </Button>
                            </li>
                            </div>
                            }>
                        
                            <li>
                                <Button>
                                    <Link to='/Recipes' className={`${classes.navbarItem} ${classes.psides}`}>My Recipes Database</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/SearchRecipes' className={`${classes.navbarItem} ${classes.psides}`}>Search for recipes</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/Contact' className={`${classes.navbarItem} ${classes.psides}`}>Contact Us</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/About' className={`${classes.navbarItem} ${classes.psides}`}>About Us</Link>
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Link to='/SignOut' className={`${classes.navbarItem} ${classes.psides}`}>Sign Out</Link>
                                </Button>
                            </li>
                            {/* <Button>
                                <Link to='/inventory' className={classes.button_text} > Take me to my Whiskeys</Link>
                            </Button> */}


                        </AuthCheck>
                    </Suspense>
                </ul>
            </div>
        </div>
    )
}

