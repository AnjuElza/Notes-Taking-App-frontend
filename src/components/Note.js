import React, { useState, useEffect } from 'react';
import {API} from './global';
export function Note({ noteId }) {
  const [noteDetails, setNoteDetails] = useState(null);

  useEffect(() => {
    // Fetch note details based on the noteId
    const fetchNoteDetails = async () => {
      try {
        const response = await fetch(`/API/notes/${noteId}`); 
        if (response.ok) {
          const noteData = await response.json();
          setNoteDetails(noteData);
        } else {
          console.error('Failed to fetch note details');
        }
      } catch (error) {
        console.error('Error fetching note details:', error);
      }
    };

    fetchNoteDetails();
  }, [noteId]);

  if (!noteDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{noteDetails.heading}</h2>
      <p>{noteDetails.note}</p>
      <p>Date: {noteDetails.date}</p>
      {/* Add other details you want to display */}
    </div>
  );
}



