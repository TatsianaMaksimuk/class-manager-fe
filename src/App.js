import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import AppRouter from './components/Routers/AppRouter';

function App() {
  return (
    <div className="App">
      <Test/> 
       {/* self-closing tag because component has no children */}

       <AppRouter/>
     
    </div>
  );
}

export default App;
