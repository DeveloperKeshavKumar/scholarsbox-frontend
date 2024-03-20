import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
// import Login from './pages/Login';
import { Outlet, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Homepage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/user' element={<Outlet />} >
            <Route path='/user' element={<User/>} />
            <Route path='/user/edit' element={<></>} />
          </Route>
          <Route path='/projects' element={<Outlet />} >
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/create-or-edit' element={<></>}/>
            <Route path='/projects/:id' element={<ProjectPage />} />
          </Route>
          <Route path='/auth' element={<Outlet />}>
            <Route path='/auth/signup' element={<></>} />
            {/* <Route path='/auth/login' element={<Login />} /> */}
            <Route path='/auth/verify-otp' element={<></>} />
            <Route path='/auth/forgot-password' element={<></>} />
          </Route>
          <Route path='*' element={<div className='text-4xl mt-16 tracking-wider text-blue-600'>404 Not Found</div>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
