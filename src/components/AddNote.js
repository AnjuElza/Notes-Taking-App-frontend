
import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useUser } from './UserContext';

export function AddNoteDialog({ open, onClose, onAddNote, notebook}) {
    const { user } = useUser();
     
    const username=user.username;
  const [newNoteData, setNewNoteData] = useState({
    heading: '',
    note: '',
    user:username,
    notebook:notebook,
    date:new Date().toLocaleDateString(),
  });
  
  console.log(notebook);
  const handleAddNote = () => {
   
    console.log('Adding Note:', newNoteData);
    onAddNote(newNoteData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Note</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="heading"
          label="Note Heading"
          fullWidth
          variant="standard"
          value={newNoteData.heading}
          onChange={(e) => {
            const updatedData = { ...newNoteData, heading: e.target.value };
            console.log('Updating Heading:', updatedData); // Log the updated data
            setNewNoteData(updatedData);
          }}
        />
        <TextField
          margin="dense"
          id="note"
          label="Note Text"
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={newNoteData.note}
          onChange={(e) => {
            const updatedData = { ...newNoteData, note: e.target.value };
            console.log('Updating Note:', updatedData); // Log the updated data
            setNewNoteData(updatedData);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleAddNote}>Add Note</Button>
      </DialogActions>
    </Dialog>
  );
}