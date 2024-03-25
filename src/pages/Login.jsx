import Template from "../components/Template"
import {Navbar} from '../components/Navbar';
import Footer from '../components/Footer';


function Login() {
  return (
    <>
    <Navbar/>
    <Template
      title="Welcome Back,"
      description1="Build skills for today, tomorrow, and beyond."
      formType="login"
    />
    <Footer/>
    </>
  )
}

export default Login;