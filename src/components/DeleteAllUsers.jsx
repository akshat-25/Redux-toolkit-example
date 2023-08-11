import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";

// import React from "react";

export const DeleteAllUsers = () => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteUsers());
  }
  return (
    <div>
      <button className="btn clear-btn" onClick={deleteHandler}>Delete All Users</button>
    </div>
  )
};