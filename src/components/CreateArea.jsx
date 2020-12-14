import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
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
    function expand () {

      setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
      {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={newNote.title}/> : null}
        
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..."  value={newNote.content} rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>
        <Fab onClick={(e) => {
            e.preventDefault();
            props.onAdd(newNote);
            setNewNote({title: "", content: ""});
            }}>
            <AddIcon />
            </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
