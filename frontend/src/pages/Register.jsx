import React from "react";
import Box from '@material-ui/core/Box';
import catSecurity from '../assets/catSecurity1.mp4';
import CustomForm from '../components/CustomForm';
import CustomVideo from '../components/CustomVideo';

const Register = () => <Box style={{ height: '100vh', width: '100%'}}><CustomVideo src={catSecurity}/><CustomForm buttonText={"Register"} formSubtitle={"Please Register!"} formFooterContent={"Already have an account ? "} linkText={"Login!"} linkTo={"/"} /></Box>

export default Register