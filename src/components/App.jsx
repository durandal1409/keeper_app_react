import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = React.useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, ind) => ind !== id);
        })
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, ind) => {
        return <Note key={ind} id={ind} title={note.title} content={note.content} onChecked={deleteNote}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
