import { useSelector } from "react-redux"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

function Template({ title, description1, formType }) {
  const { loading } = useSelector((state) => state.auth)

  return (
    <div className="flex min-h-max justify-center items-center mb-10">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="mx-auto w-11/12 max-w-5xl py-12 border rounded-lg text-left">
          <div className="mx-auto w-11/12 max-w-[600px] flex flex-col justify-center items-center ">
            <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
              {title}
            </h1>
            <p className="mt-4 text-[1.125rem] leading-[1.625rem] mb-9">
              <span className="text-richblack-100">{description1}</span>
            </p>
            {formType === "signup" ? <SignupForm /> : <LoginForm />}
          </div>
        </div>
      )}
    </div>
  )
}

export default Template