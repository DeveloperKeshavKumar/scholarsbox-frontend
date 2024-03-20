import imgPath from '../assets/icon.png';
export const Project = (project) => {
  const proj = {
    title: "Error Handler",
    description: "This project is used to resolve the error occurred in any of the following languages: C, C++, Java, JavaScript, Python, Scala, Go, Rust. Try this project to get more insight about it."
  }
  return (
    <div className=" sm:w-[36%] md:w-1/3 lg:w-1/4 xl:w-[23.5%] mx-auto p-4 border rounded-lg mb-6">
      <img src={imgPath} alt="project icon" className="w-[50%] mx-auto rounded-full object-cover" />
      <h1 className="text-black font-semibold ">{proj.title}</h1>
      <p className="text-black  text-[1rem] font-normal my-2">{proj.description.substring(0, 100) + "..."}</p>
      <button className="mt-2 text-white font-semibold py-2 px-4 rounded-lg bg-blue-600 border-blue-600 border-2 hover:text-blue-600 hover:bg-white mb-4 transition-all delay-100">View Project</button>
    </div>
  )
}
