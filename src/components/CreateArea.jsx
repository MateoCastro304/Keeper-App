import React from "react";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title:"",
    content:"",
  });

  const [onCreate, setOnCreate] = useState(false)


  function handleInput(e) {
    const { name, value } = e.target;

    setNewNote((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  function handleClick(e) {
    props.onAdd(newNote);
    setNewNote({
                title:"",
                content:"",
              });
  }

  function handleInpClick(e) {
    setOnCreate(true);
  }

  return (
    <div >
      <form className="create-note" onSubmit={(e) => {e.preventDefault();}}>
       { onCreate && <input onChange={handleInput} name="title" placeholder="Title" value={newNote.title} />}
        
        <textarea onClick={handleInpClick} onChange={handleInput} name="content" placeholder="Take a note..." rows={onCreate ? "3":"1"} value={newNote.content}/>
        <Zoom in={onCreate}>
          <Fab onClick={handleClick}>
            <Add />
          </Fab>
        </Zoom>
      </form>
      
    </div>
  );
}

export default CreateArea;
