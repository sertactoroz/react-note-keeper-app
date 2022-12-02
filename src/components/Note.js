import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Note(props) {

  const handleDelete = () => {
    props.onDelete(props.id)
    
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}> <DeleteOutlineIcon /></button>
    </div>
  );
}

export default Note;
