import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
function Note(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="note">
      <h2>{props.title}</h2>
      <h3>{props.content}</h3>
      <button onClick={handleDelete}>
        {" "}
        <DeleteOutlineIcon />
      </button>
      <br />
      <div className="date">
        <p>{props.noteTime}</p>
        <p>{props.noteDate}</p>
      </div>
    </div>
  );
}

export default Note;
