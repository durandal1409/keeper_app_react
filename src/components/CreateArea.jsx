import React, {useState} from "react";

function CreateArea(props) {
    const [newNote, setNewNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;

        setNewNote(prevVal => {
            if (name === "title") {
                return {
                    title: value,
                    content: prevVal.content
                }
            } else if (name === "content") {
                return {
                    title: prevVal.title,
                    content: value
                }
            }
        })

        
    }
  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..."  value={newNote.content} rows="3" />
        <button onClick={(e) => {
            e.preventDefault();
            props.onAdd(newNote);
            setNewNote({title: "", content: ""});
            }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
