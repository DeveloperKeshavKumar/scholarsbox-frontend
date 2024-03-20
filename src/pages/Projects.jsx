import { Navbar } from "../components/Navbar";
import ProjectTable from "../components/ProjectTable";
import  Footer  from "../components/Footer";

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="w-11/12 max-w-5xl mx-auto mt-10">
        <h1 className="text-3xl font-bold text-left ">All Projects</h1>
        <p className="text-left font-normal mt-2 text-gray-500">Explore all projects and find one for you</p>
      </div>
      <ProjectTable/>
      <Footer/>
    </>
  )
}

export default Projects;