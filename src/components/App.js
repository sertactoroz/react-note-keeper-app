import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
// import fs from 'fs';


function App() {
  
  useEffect(()=>{
    fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data);
    })
  },[]);

  // const rawNotesData = fs.readFileSync('../src/notes.json');
  // const notesData = JSON.parse(rawNotesData);
  // console.log(notesData);

  const [notes, setNotes] = useState([]);

  const addNote = (input) => {
    setNotes((prevNotes) => {
      return [...prevNotes, input];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
