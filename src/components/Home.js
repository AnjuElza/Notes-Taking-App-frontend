import React from 'react';
import Form from 'react-bootstrap/Form';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import logo_image from './images/logo.jpg';
import "./css/Home.css";

export function Home(){

    return(
<div className='main_container'>
    <div className="image_container">
        <img className='image' src={logo_image} alt="logo_image" />
    </div>
    <div className='login_container'>
    <Paper elevation={3} className='login-paper' >
   <form>
   <h2>Login</h2>
   <TextField className='form-elements' id="outlined-basic" label="Email" variant="outlined" fullWidth margin="normal"/>
   <TextField className='form-elements' id="outlined-password-input" label="Password" type="password" fullWidth margin="normal"/>
   <Button className='form-elements' variant="outlined" fullWidth sx={{ borderColor: 'yellow', ':hover': { borderColor: 'yellow' } }}>Submit</Button>
   </form>
   <h2>New Users:</h2>
   <Button className='form-elements' variant="outlined" fullWidth sx={{ borderColor: 'yellow', ':hover': { borderColor: 'yellow' } }}>Sign Up</Button>
    </Paper>
    





    {/* <Card
          bg='light'
          key='light'
          text='dark'
          style={{boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
          className="mb-2 login-card"
          
        >
           <Card.Header className="text-center" style={{ height: '60px' }}>YNote</Card.Header>
          <Card.Body>
            <Card.Title><h4>Login </h4></Card.Title>
            <Card.Text>
            <FloatingLabel controlId="floatingInput" className="mb-3">
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" >
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      <Button variant="warning" bg="warning">Log In</Button>
           
            <div>
                <h4>New Users:</h4>
                <Button variant="warning" bg="warning">Sign In</Button>
            </div>
            </Card.Text>
          </Card.Body>
        </Card> */}
   
    </div>
</div>
    );

}