import React from "react";
import Box from '@material-ui/core/Box';
import catSecurity from '../assets/catSecurity1.mp4';
import CustomForm from '../components/CustomForm';
import CustomVideo from '../components/CustomVideo';

const Login = () => <Box style={{ height: '100vh', width: '100%'}}><CustomVideo src={catSecurity}/><CustomForm buttonText={"Login"} formSubtitle={"Please Login!"} formFooterContent={"Don't have an account ? "} linkText={"Register!"} linkTo={"/register"} /></Box>

export default Login