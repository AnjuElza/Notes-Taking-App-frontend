import React from "react";
import axios from "axios";
import {toast} from 'react-hot-toast';
import { useState } from "react";
import {useNavigate, Link} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo_image from './images/logo.jpg';
import {API} from './global';

export function Register(){
    const[data,setData]=useState({
        username:"",
        email:"",
        password:"",
    })
    const navigate = useNavigate();
    // const register = useApi(API_URLS.register);
    const registerUser= async(e)=>{
        e.preventDefault();
        let {username, email, password}= data;
        
        try{
             const {data}= await axios.post(`${API}/register`,{
               // const {data}= register(
                username, email, password
             })
             console.log(username,email,password);
             if(data.error){
                toast.error(data.error);
             }else{
                setData({})
                toast.success(`Registration successful.Please login to continue.Your username is ${data.username}`);
                navigate('/');
             }
        }catch(error){
            console.log(error);
        }
    }
    return(
//     <div>  

//     <div>
//         <Container maxWidth="sm" > 
//        <Box sx={{ flexGrow: 1 , mt:"40px"}}>
//              <AppBar position="static"
//                 sx={{height:"100px", 
//                 bgcolor: 'cornflowerblue',
//                 width: '660px',
//                 borderRadius: '16px'
//                 }}>
//              <Typography variant="h6" component="div" 
//              sx={{ flexGrow: 1,
//              fontWeight: 'bold', 
//              fontSize: 'h2.fontSize',
//              fontStyle: 'oblique',

//              }}>
//             Fast Mail
            
//           </Typography>
          
//              </AppBar>
//              </Box>
//         <Box sx={{ borderRadius: '16px' , 
//                 mt: 1, boxShadow: 3, 
//                 bgcolor: 'whitesmoke',  
//                 height: '400px', 
//                 mx: 'auto', 
//                 width: 600, 
//                 display: 'flex',
//                 justifyContent: 'center',
//                 p:'30px'
//                 }}
 
//         >
//             <div>
//         <form onSubmit={registerUser}>
//         <div>
            
//             {/* <input type="text" placeholder="Enter name"
//                     value={data.name}
//                     onChange={(e)=>setData({...data,name: e.target.value})}
                    
//             /> */}
//             <TextField
//           required
//           id="outlined-required margin-normal"
//           margin="normal"
//           label="Enter user name"
//           type="text" 
          
//           value={data.username}
//           onChange={(e)=>setData({...data,username: e.target.value})}
//         />
//         </div>
//         <div>
//             <TextField
//           required
//           id="outlined-required margin-normal"
//           label="Email"
//           margin="normal"
//           placeholder="username"
//           value={data.email}
//           onChange={(e)=>setData({...data,email: e.target.value})}
//         />
           
//             </div>
//             <div>
            
//              <TextField
//           required
//           id="outlined-password-input margin-normal"
//           label="Password"
//           margin="normal"
//           type="password"
//           placeholder="Atleast 6 characters"
//           helperText="Password should be of atleast 6 characters "
//           value={data.password}
//           onChange={(e)=>setData({...data,password: e.target.value})}
//         />
//         </div>
//         <div>
//             <Button variant="contained" type="submit" 
//             sx={{ml: '190px', mt:'20px', mb:'20px', bgcolor: 'cornflowerblue', }}>
//                 Sign Up
//             </Button>
//             </div>
//         </form>
//         <Typography sx={{display:'flex'}}>
//         <h3>Existing Users:</h3>
            
//         <Link to={'/'}>
//         <Button role="link" size="large" 
//             sx={{ml: '20px', mt:'14px', }}>
//             Login
//             </Button>
//         </Link>
//         </Typography>
//         </div>
//         </Box>
//         </Container>
//     </div>
//     </div>  
//     )
// }

//---------

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
    <form onSubmit={registerUser}>
   <h2>Sign Up</h2>
   
   <TextField required className='form-elements' id="outlined-basic" label="Enter user name" variant="outlined" fullWidth margin="normal"
             value={data.username}
             onChange={(e)=>setData({...data,username: e.target.value})}
    /> 
    <TextField required className='form-elements' id="outlined-basic" label="Enter email" variant="outlined" fullWidth margin="normal"
             value={data.email}
             onChange={(e)=>setData({...data,email: e.target.value})}
    /> 
   
   <TextField required className='form-elements' id="outlined-password-input" label="Enter Password" type="password" fullWidth margin="normal"
              value={data.password}
              onChange={(e)=>setData({...data,password: e.target.value})}
   />
   
   <Button className='form-elements' type="submit" variant="outlined" fullWidth sx={{ borderColor: 'gold', ':hover': { borderColor: 'gold' } }} 
   onClick={(e) => registerUser(e)}>
    Sign Up</Button>
   </form>
   <h2>Existing Users:</h2>
   <Link to={'/'}>
   <Button className='form-elements' variant="outlined" fullWidth sx={{ borderColor: 'gold', ':hover': { borderColor: 'gold' } }}
            
   >Log In</Button>
   </Link>
    </Paper>
   
    </div>
</div>
    );
}
