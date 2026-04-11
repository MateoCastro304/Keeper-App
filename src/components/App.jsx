import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function createNote(note) {
    setNotes((prev)=>{
      return [...prev, note];
    });
  }

  function deleteNote(i){
    setNotes(prev => {
      return prev.filter((val, indNote)=> (indNote !== i));
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={createNote}/>
      {notes.map((nt, index) => (
        <Note 
          key={index} 
          title={nt.title}
          id={index}
          content={nt.content} 
          onDel={deleteNote}
        />
      ))}
      
      <Footer />
    </div>
  );
}

export default App;
