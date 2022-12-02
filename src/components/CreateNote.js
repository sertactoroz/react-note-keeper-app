import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Fab from "@mui/material/Fab";

function CreateNote(props) {
  const [input, setInput] = useState({ title: "", content: "", noteDate: "" });
  const [clicked, setClicked] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(input);
    setInput({ title: "", content: "" });
  };

  const handleClick = () => {
    setClicked((prevValue)=>{return !prevValue})
  }

  return (
    <div>
      <form className="create-note">
        <input 
         style={{display: clicked ? 'none': 'inline'}}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onClick={handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={clicked ? "1" : "3"}
          value={input.content}
        />
        <Zoom style={{display: clicked ? 'none': 'inline'}}  in={true}>
          <Fab onClick={handleSubmit}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
