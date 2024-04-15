import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editProfile } from '../services/operations/profileAPI';

export default function EditUserForm() {
  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const userId = location.pathname.split('/').slice(-2)[0];

  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    branch: user.branch,
    currentYear: user.year,
    passingYear: user.passingYear,
    rollNum: user.rollNo,
    bio: user.bio,
    goals: user.goals,
    achievements: user.achievements,
    profilepic: null
  })


  const { firstName, lastName, currentYear, passingYear, rollNum, branch, bio, goals, achievements } = formData
  function handleOnChange(e) {
    const { name, value } = e.target;
    const updatedValue = name === 'goals' || name === 'achievements' ? value.split(',').map(tag => tag.trim()) : value;
    setFormData(prevData => ({
      ...prevData,
      [name]: updatedValue
    }));
  }

  function handleFileChange(e) {
    const { name, files } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files[0],
    }));
  }

  const clearForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      branch: "",
      currentYear: "",
      passingYear: "",
      rollNum: "",
      bio: "",
      goals: [],
      achievements: [],
      profilepic: null
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setLoading(!loading);
    // Send data for updation of profile
    dispatch(editProfile(token, formData, userId, navigate));
    setLoading(!loading);
    // Reset
    clearForm();
  }

  return (
    <>
      <div className="w-11/12 max-w-5xl mx-auto mt-9 mb-5">
        <h1 className='text-4xl font-semibold underline underline-offset-8'>Edit Your Details</h1>
        <form onSubmit={handleOnSubmit} className="flex w-full flex-col items-center gap-y-4 mt-12 text-left">
          <div className="flex gap-x-4 sm:w-[425px] w-[250px]">
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8 ">
                First Name
              </p>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
                placeholder="Enter first name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Last Name
              </p>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
                placeholder="Enter last name"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>
          </div>
          <div className="flex gap-x-4 sm:w-[425px] w-[250px]">
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Roll Number
              </p>
              <input
                type="number"
                name="rollNum"
                value={rollNum}
                onChange={handleOnChange}
                placeholder="Enter roll number"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Branch
              </p>
              <select
                type="text"
                name="branch"
                value={branch}
                onChange={handleOnChange}
                placeholder="Enter your branch"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              >
                <option value="">Select Branch below</option>
                <option value="Civil">Civil Engineering</option>
                <option value="Computer Science">Comp. Sci. & Engg.</option>
                <option value="Computer Science (AI & ML)">CSE (AI/ML)</option>
                <option value="Electronics">Elec. & Comm. Engg.</option>
                <option value="Electrical">Electrical Engineering</option>
                <option value="Mechanical">Mechanical Engineering</option>
              </select>
            </label>
          </div>
          <div className="flex gap-x-4 sm:w-[425px] w-[250px]">
            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Current Year
              </p>
              <input
                type="number"
                name="currentYear"
                value={currentYear}
                onChange={handleOnChange}
                placeholder="Current year i.e. 1,2,3,4"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>

            <label>
              <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Passing Year
              </p>
              <input
                type="number"
                name="passingYear"
                value={passingYear}
                onChange={handleOnChange}
                placeholder="Passing year i.e. 2024 "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>
          </div>
          <div className="sm:w-[425px] w-[250px]">
            <label>
              <p className="text-left mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Bio
              </p>
              <textarea className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                name="bio"
                value={bio}
                onChange={handleOnChange}
                rows={10}
                placeholder="We would love to hear about yourself: "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}></textarea>
            </label>
          </div>
          <div className="sm:w-[425px] w-[250px]">
            <label>
              <p className="text-left mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Goals
              </p>
              <textarea className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                name="goals"
                onChange={handleOnChange}
                value={goals}
                rows={10}
                placeholder="Enter what you want to be:(comma separated) "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}></textarea>
            </label>
          </div>
          <div className="sm:w-[425px] w-[250px]">
            <label>
              <p className="text-left mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                Achievements
              </p>
              <textarea className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                name="achievements"
                onChange={handleOnChange}
                value={achievements}
                rows={10}
                placeholder="Enter your greatest achievements of all time:(comma separated) "
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}></textarea>
            </label>
          </div>
          <div className="sm:w-[425px] w-[250px]">
            <label>
              <p className="mb-1 text-[0.875rem] text-left leading-[1.375rem] text-richblack-8">
                Upload Profile Picture
              </p>
              <input
                type="file"
                name="profilepic"
                onChange={handleFileChange}
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 rounded-[8px] bg-blue-600 py-[8px] px-[12px] font-medium text-white min-w-[200px]"
          >
            Edit Profile
          </button>
        </form>
      </div>
    </>
  )
}
