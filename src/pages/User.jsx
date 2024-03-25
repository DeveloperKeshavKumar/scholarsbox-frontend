import { Navbar } from "../components/Navbar";
import UserHeader from "../components/UserHeader";
import UserOverview from "../components/UserOverview";
import Footer from "../components/Footer";
import UserLogout from "../components/UserLogout";
const Userdetails = () => {
  return (
    <>
      <Navbar />
      <UserHeader/>
      <UserOverview/>
      <UserLogout/>
      <Footer/>  
    </>
  )
}

export default Userdetails;