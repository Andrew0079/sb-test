import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../assets/funnyCat.png';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";
import Clock from 'react-live-clock';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { set_Username, setToken, setLastLogin } from "../redux/actions";
import moment from 'moment'


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
    width: 350,
    height: 300,
    margin: 40,
    borderRadius: '15px',
    backdropFilter: 'blur(5px)',
    background: 'radial-gradient(at 50% 0%, rgba(0,0,0,0), rgba(255,255,255,0.3))',
    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
  }
}));


const LoggedIn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const username = useSelector((state) => state.user_name);
  const lastLogin = useSelector((state) => state.lastLogin);


  const logout = () => {
    dispatch(set_Username(null));
    dispatch(setToken(null));
    dispatch(setLastLogin(null));
    history.push('/')
  }
  
  return (
    <Box className={classes.container}>
      <Box className={classes.welcomeUserBox} justifyContent='center' >
        <Grid container spacing={1} alignItems="center" justify="center" >
          <h5 style={{ textAlign: 'center', fontFamily: "monospace", fontSize: '1rem', color: 'white'}}>Silver Bullet<br/><br/>Welcome<br/>{username}</h5>
        </Grid>
        <Grid container spacing={0} alignItems="center" justify="center" >
          <p style={{ color: 'white'}}>Current Time:</p>
          <Clock format={'HH:mm:ss A'} ticking={true} timezone={'GB'} style={{ color: 'white '}} />
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center" >
        {lastLogin ? <p style={{color: 'white'}}>{`Last Login: ${'\n'} ${moment(lastLogin).format('MMMM Do YYYY, h:mm:ss a')}`}</p> : null}
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" justify="center">
        <Box paddingTop={2}>
            <Button onClick={logout} variant="contained" style={{ backdropFilter: 'blur(15px)', background: 'transparent', fontFamily: "monospace", color: 'white' }}>Log Out</Button>
          </Box>
        </Grid>

      </Box>
    </Box>
  )
}

export default LoggedIn