import React from 'react'
import {useNavigate} from 'react-router-dom';

function Profile(userProfile) {
  let navigate = useNavigate();
  const {userData: {id, name, email}} = userProfile

  if(!localStorage.getItem('token')){
    return navigate("/login");
  } 
 
  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        <li className="list-group-item">user Id: {id}</li>
        <li className="list-group-item">user name: {name}</li>
        <li className="list-group-item">user email: {email}</li>
      </ul>
    </div>
  )
}

export default Profile