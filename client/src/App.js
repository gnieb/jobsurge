

import Home from './Home';
import Jobs from './Jobs';
import NoMatch from './NoMatch';
import Nav from './Nav';
import Advice from './Advice';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/jobs' element={<Jobs/>}/>
        <Route path='/advice' element={<Advice/>} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
