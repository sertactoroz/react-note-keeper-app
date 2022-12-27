import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Fab from "@mui/material/Fab";


function CreateNote(props) {
  const [input, setInput] = useState({ title: "", content: "", noteDate: "" });
  const [clicked, setClicked] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    props.onAdd(input);
    setInput({ title: "", content: "" });
  };

  const handleClick = () => {
    setClicked(()=>{return true})
  }

  return (
    <div>
      <form className="create-note">
        <input 
         style={{display: clicked ?'inline' : 'none'}}
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
          rows={clicked ? "3" : "1"}
          value={input.content}
        />
        <Zoom style={{display: clicked ?'inline' : 'none'}}  in={true}>
          <Fab onClick={handleSubmit}>
            <AddCircleOutlineIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateNote;
