import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NotesService from "../services/NotesService";

const NotesList = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        NotesService.getAll()
            .then(response => {
                console.log('printing resposne', response.data);
                setNotes(response.data);
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
    }, []);

    return (  
        <div className="main-content">
            <h4>List of Notes</h4>
            <div className="notes-list mt-4">
                {
                    notes.length > 0 ? notes.map(note => (
                        <div key={note.id} className="notes-preview mt-3">
                            <Link to={`/notes/${note.id}`}>
                                <h5 className="primary-color text-capitalize">{note.title}</h5>
                                <p>{note.body}</p>
                            </Link>
                        </div>
                    )) : <div>No notes available</div>
                }
            </div>
        </div>
    );
}
 
export default NotesList;