import React, {useState} from "react";

function CreateNote(props) {
  const [input, setInput] = useState({ title: "", content: "", noteDate:"" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
    return(
      {...prevValue, [name]:value}
        )}
    )
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAdd(input)
    setInput({title:"", content:""})
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={input.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateNote;
