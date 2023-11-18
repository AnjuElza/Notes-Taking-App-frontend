import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Note } from './Note';

export function NotebookNotes({ notes, selectedNotebook }) {
  const navigate = useNavigate();
  const getNote = (noteId) => {
    navigate(`/userHome/${noteId}` )
  };
  return (
    <div>
      <Typography sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'space-around' }}>
        {notes &&
          notes
            .filter((note) => !selectedNotebook || note.notebook === selectedNotebook)
            .map((note, index) => (
              <Card key={index} sx={{ width: '10rem', margin: '1rem' }}>
                <CardContent>
                  <>
                    <Typography variant="h5" component="div">
                      {note.heading}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {note.date}
                    </Typography>
                  </>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => getNote(note.id)}
                  >
                    See Note
                  </Button>
                </CardActions>
              </Card>
            ))}
      </Typography>
    </div>
  );
}
