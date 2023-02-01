import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Library from './pages/Library';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Landing />} />
        <Route path='/library' element={<Library />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
