

import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function Note() {
    const {noteId } = useParams();
    console.log(noteId);
    const navigate = useNavigate();
  
  return (
    <Card sx={{ width: '10rem', margin: '1rem' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {noteId}
        </Typography>
        
        
      </CardContent>
      
    </Card>
  );
}


