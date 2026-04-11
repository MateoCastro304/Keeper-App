import React from "react";
import { useState } from "react";

function CreateArea() {
  const [newNote, setNewNote] = useState({
    title:"",
    content:"",
  });


  function handleInput(e) {
    const { name, value } = e.target;

    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return (
    <div>
      <form onSubmit={() => {e.preventDefault();}}>
        <input onChange={handleInput} name="title" placeholder="Title" value={newNote.title} />
        <textarea onChange={handleInput} name="content" placeholder="Take a note..." rows="3" value={newNote.content}/>
        <button>Add</button>
        
      </form>
      
    </div>
  );
}

export default CreateArea;
