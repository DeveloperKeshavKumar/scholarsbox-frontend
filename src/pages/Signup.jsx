import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import Template from "../components/Template"

function Signup() {
  return (
    <>
    <Navbar/>
    <div className="mt-9"></div>
    <Template
      title="Join the ScholarsBox and collaborate!"
      description1="Build skills for today, tomorrow, and beyond."
      formType="signup"
    />
    <div className="mb-16"></div>
    <Footer/>
    </>
  )
}

export default Signup;