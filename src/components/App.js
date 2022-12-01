import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {

  };

  const deleteNote = () => {
  
  };

  return (
    <div>
      <Header />
      <CreateNote />
      //Note
      <Footer />
    </div>
  );
}

export default App;
