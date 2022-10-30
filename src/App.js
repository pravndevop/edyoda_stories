
import './App.css';
import Card from './Components/NavBar/Card/Card.jsx';
import Filter from './Components/NavBar/Filter/Filter';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Filter/>
     <Card/>
    </div>
  );
}

export default App;
