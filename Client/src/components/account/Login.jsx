import React, { useState, useEffect, useContext } from 'react';
import "./login.css"

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import imageURL from "../../image/headerLogoGREY.svg"
const LoginForm= styled(Box)`
    width:100;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:#1f2641;

`;

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    background: #131324;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const HeadInfo = styled(Box)`
    display:flex;
    ${'' /* position:absolute; */}
`;
const HeadTitle = styled(Typography)
`   font-size:35px;
    font-weight:bold;
   ${'' /* background:white; */}
padding-top:100px;
    color:white;
    top:-100px;
`;
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;



const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const TextFieldInput = styled(TextField)`
  label {
    color: white;
    font-size: 14px;
  }
  input {
    color: white;
  }
  .MuiInput-underline:before {
    border-bottom-color: white;
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: white;
  }
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    // const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <LoginForm>
        <Component>
            <Box>
               <HeadInfo>
               <Image src={imageURL} alt="course" />
               <HeadTitle>Stepping stone</HeadTitle>
               </HeadInfo>

                {
                    account === 'login' ?
                        <Wrapper>
                            <TextFieldInput className="text" variant="standard" autoComplete="off" color="warning" value={login.username} onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                            <TextFieldInput variant="standard" autoComplete="off" value={login.password} onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                            {error && <Error>{error}</Error>}

                            <LoginButton variant="contained" onClick={() => loginUser()} >Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                        </Wrapper> :
                        <Wrapper>
                            <TextFieldInput variant="standard" autoComplete="off" onChange={(e) => onInputChange(e)} name='name' label='Enter Name' />
                            <TextFieldInput variant="standard" autoComplete="off" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextFieldInput variant="standard" autoComplete="off" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />

                            <SignupButton onClick={() => signupUser()} >Signup</SignupButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                        </Wrapper>
                }
            </Box>
        </Component>
        </LoginForm>
     )
}

export default Login;