import { Navbar } from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import UserOverview from "../components/UserOverview";
import Footer from "../components/Footer";
import UserLogout from "../components/UserLogout";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUser } from "../services/operations/profileAPI";

const Userdetails = () => {
  const location = useLocation()
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const [userProfile, setUserProfile] = useState(user);
  const userId = location.pathname.split('/').slice(-1)[0];

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (user._id !== userId) {
          const userData = await getUser(token, userId);
          setUserProfile(userData)
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (userId !== user._id) {
      fetchUserData();
    }
  }, [user._id, userId, token]);

  return (
    <>
      <Navbar />
      <UserHeader user={userProfile} userId={user._id} />
      <UserOverview user={userProfile} />
      {(user._id === userId) && <UserLogout />}
      <Footer />
    </>
  )
}

export default Userdetails;