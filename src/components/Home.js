import React from 'react';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo_image from './images/logo.jpg';
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import Register from './Register';
import {toast} from 'react-hot-toast';
import axios from "axios";
import {API} from './global';
import "./css/Home.css";

export function Home(){
  const navigate= useNavigate();
  const[data,setData]=useState({
      username:"",
      password:"",
  })
  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`${API}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // Successful login
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', data.username);
        navigate(`/userHome`);
      } else {
        // Failed login
        toast.error(result.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
    return(
<div className='main_container'>
<AppBar position="fixed" sx={{ backgroundColor:'gold' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Notes
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    <div className="image_container">
        <img className='image' src={logo_image} alt="logo_image" />
    </div>
    <div className='login_container'>
    <Paper elevation={3} className='login-paper' >
   <form onSubmit={loginUser}>
   <h2>Login</h2>
   <TextField required className='form-elements' id="outlined-basic" label="Username" variant="outlined" fullWidth margin="normal"
             value={data.username}
             onChange={(e)=>setData({...data,username: e.target.value})}
    />
   <TextField required className='form-elements' id="outlined-password-input" label="Password" type="password" fullWidth margin="normal"
              value={data.password}
              onChange={(e)=>setData({...data,password: e.target.value})}
   />
   <Button className='form-elements' variant="outlined" fullWidth sx={{ borderColor: 'gold', ':hover': { borderColor: 'gold' } }} 
   onClick={(e) => loginUser(e)}
   >
    Login</Button>
   </form>
   <h2>New Users:</h2>
   <Link to={'/register'}>
   <Button className='form-elements' variant="outlined" fullWidth sx={{ borderColor: 'gold', ':hover': { borderColor: 'gold' } }}
            
   >Sign Up</Button>
   </Link>
    </Paper>
   
    </div>
</div>
    );

}

