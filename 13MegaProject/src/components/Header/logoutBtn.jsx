import React from 'react'
import {useDispatch} from 'react-redux'
import authSerivce from '../../Appwrite/confi'
import{logout} from '../../store/AuthFile'

function logoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authSerivce.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button className=' inline-back px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'> Logout</button>
  )
}

export default logoutBtn



