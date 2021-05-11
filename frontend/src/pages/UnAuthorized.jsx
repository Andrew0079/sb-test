import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/unauthorized.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: "absolute",
  },
  welcomeUserBox: {
    width: 280,
    height: 130,
    margin: 40,
    borderRadius: '15px',
    backdropFilter: 'blur(5px)',
    background: 'radial-gradient(at 50% 0%, rgba(0,0,0,0), rgba(255,255,255,0.3))',
    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
  }
}));


const UnAuthorized = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.welcomeUserBox} justifyContent='center' >
        <Grid container spacing={1} alignItems="center" justify="center" >
          <h5 style={{ textAlign: 'center', fontFamily: "monospace", fontSize: '1rem', color: 'white'}}>I'm sorry Mate!<br/> Your username or password is wrong. Maybe next Time!</h5>
        </Grid>
      </Box>
    </Box>
  )
}

export default UnAuthorized