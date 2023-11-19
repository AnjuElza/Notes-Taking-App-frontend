import { AddNoteDialog } from './AddNote';

const [openDialog1, setOpenDialog1] = useState(false);
const [selectedNotebook, setSelectedNotebook] = useState(null);
const [newNoteData, setNewNoteData] = useState({
    heading: "",
    note: "",
    notebook:"",
    user:"user",
  });

  const handleOpenDialog1 = () => {
    setOpenDialog1(true);
  };

  const handleCloseDialog1 = () => {
    console.log("Closing dialog");
    setOpenDialog1(false);
  };

  const handleAddNote = async () => {
    try {
      if (!selectedNotebook) {
        alert('Please select a notebook before adding a note.');
        return;
      }
      console.log("Request payload:", newNoteData);
      const response = await fetch(`${API}/addNote`, {
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
  };{selectedNotebook && (
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
  <AddNoteDialog
        open={openDialog1}
        onClose={handleCloseDialog1}
        onAddNote={handleAddNote}
      />