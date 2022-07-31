import logo from './logo.svg';
import './App.css';
import AppRouter from './components/Routers/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/Providers/AuthProvider';
//{} used when more than one possible import


function App() {
  return (
    <BrowserRouter>
      {/* self-closing tag because component has no children */}
      <AuthProvider>
        <AppRouter />
        {/* with AuthProvider all of our components indide off approuter can use contect to acces state data from AuthProvider*/}
      </AuthProvider>
    </BrowserRouter >


  );
}

export default App;
