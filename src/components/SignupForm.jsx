import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../services/operations/authAPI"
import { setSignupData } from "../slices/authSlice"
// import Tab from "../../common/Tab"

function SignupForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // student or instructor
    const [accountType, setAccountType] = useState("Student")

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        branch: "",
        currentYear: "",
        passingYear: "",
        rollNum: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const { firstName, lastName, branch, currentYear, passingYear, rollNum, email, password, confirmPassword } = formData

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    // Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }

        // Setting signup data to state
        // To be used after otp verification
        dispatch(setSignupData(signupData))
        // Send OTP to user for verification
        dispatch(sendOtp(formData.email, navigate))


        // Reset
        setFormData({
            firstName: "",
            lastName: "",
            branch: "",
            currentYear: "",
            passingYear: "",
            rollNum: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
        setAccountType("Student")
    }

    // data to pass to Tab component
    //   const tabData = [
    //     {
    //       id: 1,
    //       tabName: "Student",
    //       type: ACCOUNT_TYPE.STUDENT,
    //     },
    //     {
    //       id: 2,
    //       tabName: "Instructor",
    //       type: ACCOUNT_TYPE.INSTRUCTOR,
    //     },
    //   ]

    return (
        <div>
            {/* Tab */}
            {/* <Tab tabData={tabData} field={accountType} setField={setAccountType} /> */}
            {/* Form */}
            <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
                <div className="flex gap-x-4">
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            First Name <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
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
                            Last Name <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
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
                <div className="flex gap-x-4">
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            Roll Number <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
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
                            Branch <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="branch"
                            value={branch}
                            onChange={handleOnChange}
                            placeholder="Enter your branch"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />
                    </label>
                </div>
                <div className="flex gap-x-4">
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            Current Year <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="number"
                            name="currentYear"
                            value={currentYear}
                            onChange={handleOnChange}
                            placeholder="Enter current year"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />
                    </label>

                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            Passing Year <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type="number"
                            name="passingYear"
                            value={passingYear}
                            onChange={handleOnChange}
                            placeholder="Enter passing year"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                        />
                    </label>
                </div>
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                        Email Address <sup className="text-red-500 font-bold text-sm">*</sup>
                    </p>
                    <input
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter email address"
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-8"
                    />
                </label>
                <div className="flex gap-x-4">
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            Create Password <sup className=" text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-8"
                        />
                        <span
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-8">
                            Confirm Password <sup className="text-red-500 font-bold text-sm">*</sup>
                        </p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder="Confirm Password"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-8"
                        />
                        <span
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="mt-5 rounded-[8px] bg-blue-600 py-[8px] px-[12px] font-medium text-white"
                >
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm