
import './App.css';
import { Home } from './components/Home';
import { UserPage } from './components/UserPage';
import { NotebookNotes } from './components/NotebookNotes';
import { Note } from './components/Note';
import { Register } from './components/Register';
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './components/UserContext';
function App() {
  return (
    <UserProvider>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userHome" element={<UserPage />} />
    <Route path="/userHome/:noteBook" element={<NotebookNotes />} />
    <Route path="/userHome/:noteId" element={<Note />} />
  </Routes>
  </UserProvider>
    // <div className="App">
    //   {/* < Home /> */}
    //   <UserPage />
    // </div>
  );
}

export default App;
