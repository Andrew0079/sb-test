import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { fetchPost } from '../utils/fetchApi';
import { useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch } from "react-redux";
import { set_Username, setToken, setLastLogin } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    width: 350,
    height: 400,
    padding: 20,
    border: '1px solid rgba(255, 255, 255, 0.4)',
    borderRadius: '15px',
    backdropFilter: 'blur(5px)',
    background: 'radial-gradient(at 50% 0%, rgba(0,0,0,0), rgba(255,255,255,0.3))',
    boxShadow: '10px 10px 30px rgba(0,0,0,0.5)'
  },
}));

const CustomForm = ({ buttonText, formSubtitle, formFooterContent, linkText, linkTo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false);
  const location = useLocation();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  const onLogIn = async () => {
    const response = await fetchPost('login/', { username, password })
    if(response?.username && response?.token && response?.last_login) {
      dispatch(set_Username(response.username));
      dispatch(setToken(response.token));
      dispatch(setLastLogin(response.last_login));
      history.push(`/loggedin`)
    } else {
      // I didn't display an error only because the cat security image is awesome and I was looking for cat images for 40 minutes:D
      // setOpen(true)
      // setError(...response.non_field_errors)
      history.push('/unauthorized')
    }
  }

  const onRegister = async () => {
    const response = await fetchPost('register/', { username, email, password })
    if(response?.username && response?.token) {
      dispatch(set_Username(response.username));
      dispatch(setToken(response.token));
      history.push(`/loggedin`)
    } else if (response?.username && Array.isArray(response.username)) {
      setOpen(true)
      setError(...response.username)
    } else {
       setOpen(true)
       setError("Sorry! Something went wrong. Please try again!")
    }
  }
  
  return (
    <Box style={{ paddingLeft: 50, paddingTop: 20 }}>
       <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
         {error}
        </Alert>
      </Snackbar>
      <Box className={classes.margin}>
        <Grid container spacing={1} alignItems="center" justify="center" >
          <h5 style={{ textAlign: 'center', fontFamily: "monospace", fontSize: '1rem', paddingLeft: 20, paddingRight: 20}}>Silver Bullet<br/>Welcome<br/>{formSubtitle}</h5>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid-one" label="Username" onChange={event => setUsername(event.target.value)} />
          </Grid>
        </Grid>
      { location.pathname === '/register' ?  <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Grid item>
            <Email />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid-one" label="Email" onChange={event => setEmail(event.target.value)} />
          </Grid>
        </Grid>: null}
        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Grid item>
            <LockIcon />
          </Grid>
          <Grid item>
            <TextField type="password" id="input-with-icon-grid-two" label="Password" onChange={event => setPassword(event.target.value)}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} alignItems="flex-end" justify="center">
          <Box paddingTop={2}>
            <Button onClick={location.pathname === '/register' ? onRegister : onLogIn} variant="contained" style={{ backdropFilter: 'blur(15px)', background: 'transparent', fontFamily: "monospace" }}>{buttonText}</Button>
          </Box>
        </Grid>
        <Grid container spacing={1} alignItems="center" justify="center">
          <h5 style={{ textAlign: 'center', fontFamily: "monospace", fontSize: '1rem'}}>{formFooterContent} 
          <Link style={{ textDecoration: 'none' }} to={{ pathname: linkTo, state: [{ username }] }}>{linkText}</Link></h5>
        </Grid>
      </Box>
    </Box>
  );
}

export default CustomForm