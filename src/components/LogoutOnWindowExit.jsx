import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutOnExit } from '../services/operations/authAPI'// Import your logout action

function LogoutOnClose() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(logoutOnExit());
  }, [dispatch]);

  return null;
}

export default LogoutOnClose;
