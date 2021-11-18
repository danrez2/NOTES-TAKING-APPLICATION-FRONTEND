import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useHistory, useParams } from "react-router";
import NotesService from "../services/NotesService";


const NoteDetails = () => {
    const {id} = useParams();
    const[currentNote, setCurrentNote] = useState('');
    const history = useHistory();

    useEffect(() => {
        NotesService.get(id)
            .then(note => {
                setCurrentNote(note.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }, []);

    const handleDelete = () => {
        NotesService.remove(id)
        .then(response => {
            history.push("/");

        })
        .catch(error => {
            console.log("something went wrong", error);
        })

    }

    const handleEdit = () => {
        history.push(`/notes/edit/${id}`);
    }
    return ( 
        <div className="note-details main-content">
           {
               currentNote && 
               <div>
                    <article>
                     <h5 className="text-capitalize primary-color">{currentNote.title}</h5>
                     <div className="mb-3 font-italic metedata">
                       <Moment fromNow>{currentNote.updatedAt}</Moment>
                       <span className="text-capitalize">, {currentNote.category}</span>
                    </div>
                    <div className="mb-3">{currentNote.body}</div>
               </article>
               <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete} className="ml-3">Delete</button>

               </div>
           }
        </div>
        
     );
}
 
export default NoteDetails;