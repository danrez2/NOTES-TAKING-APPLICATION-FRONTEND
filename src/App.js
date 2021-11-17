import "bootstrap/dist/css/bootstrap.min.css";
import  NotFound  from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NoteDetails from "./components/NoteDetails";



function App() {
  return (
   <BrowserRouter>
   <div>
      <div>
        <Navbar />
       <Switch>
         <Route exact path="/" component={NotesList} />
         <Route path="/add" component={AddNote} />
         <Route path="/notes/edit/:id" component={AddNote} />
         <Route path="/notes/:id" component={NoteDetails} />
         <Route path="*" component={NotFound} />
         
       </Switch>
      </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
