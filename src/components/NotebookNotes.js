import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Note } from './Note';
import Paper from '@mui/material/Paper';
export function NotebookNotes({ notes, selectedNotebook }) {
  console.log("at start",notes)
  const navigate = useNavigate();
  const getNote = (noteId) => {
    navigate(`/userHome/${noteId}`);
  };
  return (
  
  <div>
     
      <Typography sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'space-around' }}>
        {notes &&
          notes
           
            .map((note) => (
              <Card key={note._id} sx={{ width: '10rem', margin: '1rem' }}>
                <CardContent>
                  <>
                    <Typography variant="h5" component="div">
                      {note.heading}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {note.note}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {note.date}
                    </Typography>
                  </>
                </CardContent>
                
              </Card>
            ))}
      </Typography>
    </div>
  );
}
