import * as React from 'react';
import { useState, useEffect  } from 'react';
import {useNavigate, Link} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
 import MailIcon from '@mui/icons-material/Mail';
 import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import app_logo from './images/app_logo.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { useUser } from './UserContext';
import { NotebookNotes } from './NotebookNotes';
import { AddNoteDialog } from './AddNote';
import {API} from './global';

const drawerWidth = 240;

export function UserPage() {
  const { user } = useUser();
  const username=user.username;
  const [mobileOpen, setMobileOpen] = useState(false);
  // const[notebooks, setNotebooks] = useState(['Notebook 1', 'Notebook 2', 'Notebook 3', 'Notebook 4', 'Notebook 5', 'Notebook 6']);
  const [notebooks, setNotebooks] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialog1, setOpenDialog1] = useState(false);
  const [selectedNotebook, setSelectedNotebook] = useState(null);
  const [allNotes, setAllNotes] = useState([]);
  const [notesInSelectedNotebook, setNotesInSelectedNotebook] = useState([]);
 
  const navigate = useNavigate();
  const fetchNotebooks = async () => {
    try {
      const response = await fetch(`${API}/notebooks/${username}`); 
      if (response.ok) {
        const notebooksData = await response.json();
        setNotebooks(notebooksData);
      } else {
        console.error('Failed to fetch notebooks');
      }
    } catch (error) {
      console.error('Error fetching notebooks:', error);
    }
  };

  const fetchAllNotes = async () => {
    try {
      const response = await fetch(`${API}/allNotes/${username}`);
      if (response.ok) {
        const allNotesData = await response.json();
        setAllNotes(allNotesData);
      } else {
        console.error("Failed to fetch all notes");
      }
    } catch (error) {
      console.error("Error fetching all notes:", error);
    }
  };

  const fetchNotesInSelectedNotebook = async (notebookId) => {
    try {
      const response = await fetch(`${API}/notes/${notebookId}`);
      if (response.ok) {
        const selectedNotebookNotes = await response.json();
        setNotesInSelectedNotebook(selectedNotebookNotes);
      } else {
        console.error("Failed to fetch notes in selected notebook");
      }
    } catch (error) {
      console.error("Error fetching notes in selected notebook:", error);
    }
  };
 

  useEffect(() => {
    fetchNotebooks();
    fetchAllNotes();
  }, []);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleOpenDialog1 = () => {
    setOpenDialog1(true);
  };

  const handleCloseDialog1 = () => {
    console.log("Closing dialog");
    setOpenDialog1(false);
  };

  const handleCreateNotebook = async (newNotebookTitle) => {
    try {
      // Make a POST request to your API endpoint
      const response = await fetch(`${API}/addNotebook`, {
        method: "POST",
        body: JSON.stringify({
          user: username, 
          notebook: newNotebookTitle,
        }),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
        },
      });
  
      if (response.ok) {
        // Notebook successfully created in the backend, you can handle the response if needed
        alert("Notebook created successfully!");
        await fetchNotebooks();
      } else {
        // Handle errors if any
        alert("Failed to create notebook");
      }
    } catch (error) {
      console.error("Error creating notebook:", error);
    }
  
    // Close the dialog
    handleCloseDialog();
  };

  const handleAddNote = async (newNoteData, notebookId) => { 
    try {
      if (!selectedNotebook) {
        alert('Please select a notebook before adding a note.');
        return;
      }
      console.log("Request payload:", newNoteData);
      const response = await fetch(`${API}/addNote/${notebookId}`, {
        method: 'POST',
        body: JSON.stringify(newNoteData),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
        },
      });
  
      if (response.ok) {
        alert('Note created successfully!');
      } else {
        alert('Failed to create note');
      }
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };
  
//const titles=['Notebook 1', 'Notebook 2', 'Notebook 3', 'Notebook 4', 'Notebook 5', 'Notebook 6'];
// const current_date=new Date().toISOString();
const handleNotebookClick = async (selectedNotebook) => {
  setSelectedNotebook(selectedNotebook);
  await fetchNotesInSelectedNotebook(selectedNotebook._id); // Assuming _id is the notebook id
};
// const handleNotebookSelection = async (selectedNotebook) => {
//   setSelectedNotebook(selectedNotebook);
 
//   await fetchNotesInSelectedNotebook(selectedNotebook._id); // Assuming _id is the notebook id
// };

const handleSignOut = () => {
  // Clear user-related information from local storage
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  navigate('/');
};

// const notes=[
//     {
//         id:1,
//         user:"user1",
//         notebook:'Notebook 1',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'29/08/2023',
//         favourite:0,
//     },
//     {
//         id:2,
//         user:"user2",
//         notebook:'Notebook 2',
//         heading:'heading',
//         notes:'wsrwerwerwer hgjgfhjffh fdgdsfgsdgsdg xgsdgsdgsdg  gsdffgdsfgsdg gsdgsdgsg gsdgsdgsg gsdggsdgdf.',
//         date:'4/09/2023',
//         favourite:0
//     },
//     {
//         id:3,
//         user:"user2",
//         notebook:'Notebook 3',
//         heading:'heading',
//         notes:'weqwrwqrwq32 fgretet twetw ',
//         date:'18/10/2023',
//         favourite:0
//     },

//     {
//         id:4,
//         user:"user1",
//         notebook:'Notebook 4',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },
//     {
//         id:5,
//         user:"user1",
//         notebook:'Notebook 5',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },
//     {
//         id:6,
//         user:"user2",
//         notebook:'Notebook 1',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },
//     {
//         id:7,
//         user:"user3",
//         notebook:'Notebook 3',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },

//     {
//         id:8,
//         user:"user3",
//         notebook:'Notebook 1',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },
//     {
//         id:9,
//         user:"user3",
//         notebook:'Notebook 2',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     },
//     {
//         id:10,
//         user:"user3",
//         notebook:'Notebook 2',
//         heading:'heading',
//         notes:'This is nte 1',
//         date:'18/10/2023',
//         favourite:0
//     }
// ]
  const drawer = (
    <div>
      <Toolbar />
      {/* <img className='logo_image' src={app_logo} alt="logo_image" height={60} width={170}/> */}
      <Divider />
      <h5>Add New Notebook:</h5>
      <Button variant="contained" 
        sx={{ backgroundColor: 'gold', ':hover': {backgroundColor: 'gold' }, marginBottom:'1rem' }}
        onClick={handleOpenDialog}
      >
        Add Notebook
      </Button>
      <Divider />
      <List>
  {notebooks.map((notebook) => (
    <ListItem key={notebook._id} disablePadding selected={selectedNotebook === notebook}>
      <ListItemButton onClick={() => handleNotebookClick(notebook)}>
        <ListItemIcon>
          <MenuBookIcon />
        </ListItemIcon>
        <ListItemText primary={notebook.notebook} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: {  backgroundColor:'gold', sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            MyNotes
          </Typography>
          <Button color="inherit" onClick={handleSignOut} sx={{ marginLeft: 'auto' }}>Sign Out</Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        {/* <NotebookNotes
          notes={selectedNotebook ? notesInSelectedNotebook : allNotes}
          selectedNotebook={selectedNotebook}
        /> */}
       
      </Box>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
  <Toolbar />
  {selectedNotebook && (
          <Button
            variant="contained"
            onClick={handleOpenDialog1}
            sx={{
              position: "absolute",
              top: 50,
              right: 0,
              margin: "2rem",
            }}
          >
            Add Note
          </Button>
        )}
        <NotebookNotes
          notes={selectedNotebook ? notesInSelectedNotebook : allNotes}
          selectedNotebook={selectedNotebook}
        />
      </Box>
      <AddNotebookDialog open={openDialog} onClose={handleCloseDialog} onCreate={handleCreateNotebook} /> 
 /* Add Note Dialog - onAddNote={handleAddNote} notebook={selectedNotebook ? selectedNotebook._id : ''}*/
 <AddNoteDialog
        open={openDialog1}
        onClose={handleCloseDialog1}
       
       
        onAddNote={(newNoteData) => handleAddNote(newNoteData, selectedNotebook ? selectedNotebook._id : '')} 
      />
     

    </Box>
  );
}


function AddNotebookDialog({ open, onClose, onCreate }) {

  const [notebookTitle, setNotebookTitle] = useState('');
  
  const handleCreateNotebook = () => {
  // Invoke the callback function with the entered title
  onCreate(notebookTitle);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Notebook</DialogTitle>
      <DialogContent>
        
        <TextField
        autoFocus
        margin="dense"
        id="title"
        label="Notebook Title"
        fullWidth
        variant="standard"
        value={notebookTitle}
        onChange={(e) => setNotebookTitle(e.target.value)}
      />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCreateNotebook}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}


