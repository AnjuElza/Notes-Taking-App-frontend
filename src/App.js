
import './App.css';
import { Home } from './components/Home';
import { UserPage } from './components/UserPage';
import { NotebookNotes } from './components/NotebookNotes';
import { Note } from './components/Note';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/userHome" element={<UserPage />} />
    <Route path="/userHome/:noteBook" element={<NotebookNotes />} />
    <Route path="/userHome/:note" element={<Note />} />
  </Routes>
    // <div className="App">
    //   {/* < Home /> */}
    //   <UserPage />
    // </div>
  );
}

export default App;
