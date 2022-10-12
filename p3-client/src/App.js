import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar';
import JobSeekers from './components/JobSeekers';
import Jobs from './components/Jobs';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/jobs' element={<Jobs />} />
          {/* <Route path='/job-seeker' element={<JobSeeker />} /> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
