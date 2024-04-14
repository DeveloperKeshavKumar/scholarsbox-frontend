import './App.css';
import Homepage from './pages/Homepage';
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import EditProjectPage from './pages/EditProjectPage'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import { Outlet, Route, Routes, } from 'react-router-dom';
import VerifyEmail from './pages/verifyEmail';
import CreateProjectPage from './pages/CreateProjectPage';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import DeleteProjectPage from './pages/DeleteProjectPage';
import EditUser from './pages/EditUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Homepage />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/user' element={<Outlet />} >
            <Route path={'/user/:id' } element={<PrivateRoute><User /></PrivateRoute>} />
            <Route path='/user/:id/edit' element={<><EditUser/></>} />
          </Route>
          <Route path='/projects' element={<Outlet />} >
            <Route path='/projects' element={<><Projects /></>} />
            <Route path='/projects/create' element={<PrivateRoute><CreateProjectPage /></PrivateRoute>} />
            <Route path={'/projects/:project'} element={<ProjectPage />} />
            <Route path='/projects/:id/edit' element={<PrivateRoute><EditProjectPage /></PrivateRoute>} />
            <Route path='/projects/:id/delete' element={<PrivateRoute><DeleteProjectPage /></PrivateRoute>} />
          </Route>
          <Route path='/auth' element={<Outlet />}>
            <Route path='/auth/signup' element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path='/auth/login' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='/auth/verify-email' element={<PublicRoute><VerifyEmail /></PublicRoute>} />
            <Route path='/auth/forgot-password' element={<PublicRoute><ForgotPassword /></PublicRoute>} />
          </Route>
          <Route path='*' element={<div className='text-4xl mt-16 tracking-wider text-blue-600'>404 Not Found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
