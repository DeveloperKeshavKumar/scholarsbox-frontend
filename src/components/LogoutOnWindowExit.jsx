import { useDispatch } from 'react-redux';
import { logout } from '../services/operations/authAPI'; 
import { useEffect } from 'react';

const LogoutOnWindowExit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleWindowUnload = () => {
      // Dispatch the logout action here
      dispatch(logout());
    };
    window.addEventListener('beforeunload', handleWindowUnload);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleWindowUnload);
    };
  }, [dispatch]);

  return null;
};

export default LogoutOnWindowExit;
