
import './App.css';
import Home from './Home';
import Jobs from './Jobs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
