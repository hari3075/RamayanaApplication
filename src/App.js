import { BrowserRouter as Router,Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Aboutpage from './components/Aboutpage';
import Homepage from './components/Homepage';
import Historypage from './components/Historypage';
import bgv from './Assets/bgv.jpg'
function App() {
  return (
    <div style={{backgroundImage:`url(${bgv})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
    <Router>
      <div >
        <div className='links'>
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <nav>
              <Link to="/about">About</Link>
            </nav>
            <nav>
              <Link to="/history">History</Link>
            </nav>
            </div>
      <Routes>
<Route  path='/' element={<Homepage/>}/>
<Route path='/about' element={<Aboutpage/>}/>
<Route path='/History' element={<Historypage/>}/>
</Routes>
</div>
    </Router>
    </div>
  );
}

export default App;
