import "bootstrap/dist/css/bootstrap.min.css";
import  NotFound  from './components/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotesList from './components/NotesList';
import Navbar from "./components/Navbar";



function App() {
  return (
   <BrowserRouter>
   <div>
      <div>
        <Navbar />
       <Switch>
         <Route exact path="/" component={NotesList} />
         <Route path="*" component={NotFound} />
         
       </Switch>
      </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
