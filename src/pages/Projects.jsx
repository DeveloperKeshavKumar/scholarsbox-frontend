import { Navbar } from "../components/Navbar";
import ProjectTable from "../components/ProjectTable";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Projects = () => {
  const {token} = useSelector((state)=>state.auth)
  return (
    <>
      <Navbar />
      <div className="w-11/12 max-w-5xl mx-auto mt-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-left ">All Projects</h1>
          {token && <Link to="/projects/create">
            <button className="mt-5 rounded-[8px] bg-blue-600 py-[8px] px-[12px] font-medium text-white" >Create Project</button>
          </Link>}
        </div>
        <p className="text-left font-normal mt-2 text-gray-500">Explore all projects and find one for you</p>
      </div>
      <ProjectTable />
      <Footer />
    </>
  )
}

export default Projects;