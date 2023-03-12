import { Navbar } from '../Navbar'
import React, { useState } from 'react'
import { useAuth } from 'reactfire';
import 'firebase/auth';
import { Container, Button, makeStyles, Typography } from '@material-ui/core';
import { useStore } from 'react-redux';
import { Drawer as MUIDrawer, 
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
     } from '@material-ui/core';
import { RouteComponentProps, withRouter } from "react-router-dom";
import image from '../../assets/images/food_cooked.jpeg'
import { RegisterForm } from '../SignUpForm'





const useStyles = makeStyles({
  googleButton:{
      backgroundColor: 'rgb(66,133,244)',
      marginTop: '2em',
      padding: '0',
      color: 'white',
      height: '50px',
      width: '240px',
      border: 'none',
      textAlign: 'center',
      boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
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
      marginTop: '2em'
  },
  snackBar: {
      color: 'white',
      backgroundColor: '#4caf50'
  },

  background: {
    backgroundImage: `url(${image})`,
    bacgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    // backgroundPosition: 'top',
    backgroundSize: '100%',
    // position: 'fixed',
    // opacity: 0.5,
    // zIndex: -1,
    backgroundPosition: 'center center'
}

});

interface RegisterProps {
    history : RouteComponentProps["history"];
    location : RouteComponentProps['location'];
    match : RouteComponentProps['match'];
}




export const SignUp = withRouter((props:RegisterProps ) => {

    console.log(props);
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = useState(false);

 

    const handleDialogClickOpen = () => {
        setDialogOpen(true)
    };

    const handleDialogClickClose = () => {
        setDialogOpen(false)
    };





    // 
  


      return (
          <div>
              <Navbar />
              <div className={classes.background}>
              <Container maxWidth = 'sm' className={classes.containerStyle}>
                  <Typography className={classes.typographyStyle}>Sign Up Below</Typography>
                  <div className={classes.typographyStyle} > 
                        <Button type="submit" variant='contained' color='primary' onClick={handleDialogClickOpen}>Sign Up Form</Button>
                            <Dialog open={dialogOpen} onClose={handleDialogClickClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">New User Form</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText></DialogContentText>
                                        <RegisterForm />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleDialogClickClose} color="primary">Cancel</Button>
                                        <Button onClick={handleDialogClickOpen} color="primary">Done</Button>
                                    </DialogActions>
                            </Dialog>
                  </div>
                  <div className={classes.typographyStyle} >Feature Currently Unavailable</div>
              </Container>
              </div>
          </div>
  )
});

