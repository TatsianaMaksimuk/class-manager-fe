import logo from './logo.svg';
import './App.css';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
     
     {/* self-closing tag because component has no children */}

     <AppRouter/>
   
     </BrowserRouter>
  
    
  );
}

export default App;
