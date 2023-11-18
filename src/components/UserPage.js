import * as React from 'react';
import { useState } from 'react';
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
import { NotebookNotes } from './NotebookNotes';

const drawerWidth = 240;

export function UserPage() {
 
  const [mobileOpen, setMobileOpen] = useState(false);
  const[notebooks, setNotebooks] = useState(['Notebook 1', 'Notebook 2', 'Notebook 3', 'Notebook 4', 'Notebook 5', 'Notebook 6']);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedNotebook, setSelectedNotebook] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCreateNotebook = (newNotebookTitle) => {
    // Add the new notebook title to the notebooks array
    setNotebooks([...notebooks, newNotebookTitle]);

    // Close the dialog
    handleCloseDialog();
  };
//const titles=['Notebook 1', 'Notebook 2', 'Notebook 3', 'Notebook 4', 'Notebook 5', 'Notebook 6'];
// const current_date=new Date().toISOString();
const notes=[
    {
        id:1,
        notebook:'Notebook 1',
        heading:'heading',
        notes:'This is nte 1',
        date:'29/08/2023',
        favourite:0,
    },
    {
        id:2,
        notebook:'Notebook 2',
        heading:'heading',
        notes:'wsrwerwerwer hgjgfhjffh fdgdsfgsdgsdg xgsdgsdgsdg  gsdffgdsfgsdg gsdgsdgsg gsdgsdgsg gsdggsdgdf.',
        date:'4/09/2023',
        favourite:0
    },
    {
        id:3,
        notebook:'Notebook 3',
        heading:'heading',
        notes:'weqwrwqrwq32 fgretet twetw ',
        date:'18/10/2023',
        favourite:0
    },

    {
        id:4,
        notebook:'Notebook 4',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },
    {
        id:5,
        notebook:'Notebook 5',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },
    {
        id:6,
        notebook:'Notebook 1',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },
    {
        id:7,
        notebook:'Notebook 1',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },

    {
        id:8,
        notebook:'Notebook 1',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },
    {
        id:9,
        notebook:'Notebook 1',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    },
    {
        id:10,
        notebook:'Notebook 2',
        heading:'heading',
        notes:'This is nte 1',
        date:'18/10/2023',
        favourite:0
    }
]
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
        { notebooks.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => setSelectedNotebook(text)}>
            <ListItemIcon>
                    < MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
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
            Navbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
        {/* <Toolbar />
        <Typography sx={{ display: 'flex', flexWrap: 'wrap', alignItems:'space-around' }}>
        {notes.map((note)=>(
        <Card key={note.index} sx={{ width:'10rem', margin:'1rem' }}>
      <CardContent> 
        
            <><Typography variant="h5" component="div">
                {note.heading}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {note.date}
                </Typography></>
          
      </CardContent>
      <CardActions>
        <Button size="small">See Note</Button>
      </CardActions>
    </Card>
    ))}
        </Typography>
        
      </Box>
      <AddNotebookDialog open={openDialog} onClose={handleCloseDialog} onCreate={handleCreateNotebook} />
    </Box>
  ); */}
  <Toolbar />
        <NotebookNotes notes={notes} selectedNotebook={selectedNotebook} />
      </Box>
      <AddNotebookDialog open={openDialog} onClose={handleCloseDialog} onCreate={handleCreateNotebook} />
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


