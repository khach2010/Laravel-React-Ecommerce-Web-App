import React from 'react'
import {useLocation} from 'react-router-dom';

function Profile() {
  const location = useLocation();
  
  return (
    <div>
      <h1>User Profile</h1>
      <h3>{location.state.msg}</h3>
      <ul>
        <li className="list-group-item">user Id: {location.state.id}</li>
        <li className="list-group-item">user name: {location.state.name}</li>
        <li className="list-group-item">user email: {location.state.email}</li>
      </ul>
    </div>
  )
}

export default Profile