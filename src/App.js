import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'
import Userdetails from './pages/Userdetails'
import Projects from './pages/Projects';
import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<Userdetails />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<div className='text-4xl mt-16 tracking-wider text-blue-600'>404 Not Found</div>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
