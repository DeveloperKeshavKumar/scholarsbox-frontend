import React from 'react'
import { logout } from "../services/operations/authAPI"
import {  useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

export default function UserLogout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler= ()=>{
            dispatch(logout(navigate))
    }
  return (
    <>
        <div className='w-11/12 max-w-5xl mx-auto mt-9 mb-5 bg-blue-200 rounded min-h-[100px] flex flex-col justify-center items-center'>
        <h3 className='text-2xl font-semibold leading-none '>Do you want to Logout?</h3>
        <button className='mt-5 px-2 py-1 lg:px-4 lg:py-2 text-sm font-medium text-white bg-blue-600 border border-blue-400 rounded-lg hover:bg-blue-700 hover:text-white focus:z-10 focus:ring-1 focus:ring-blue-600 focus:text-white-600' onClick={logoutHandler}>Logout</button>
        </div>
    </>
  )
}
