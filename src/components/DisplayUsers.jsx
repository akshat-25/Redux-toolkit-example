// import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { removeUser } from "../store/slices/UserSlice";
const DisplayUsers = () => {

    const dispatch = useDispatch();

    const data =  useSelector((state) => {
        return state.users;
    })

    const deleteUser = (id) => {
         dispatch(removeUser(id))
    }
  return (
   <div>
    {
        data.map((user,id) => {
         return <li key={id}>
            {user}
         <button className="btn btn-delete" onClick={() => deleteUser(id)}>
            Delete
         </button>
         </li>
        })
    }
   </div>
  )
}

export default DisplayUsers