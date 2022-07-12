import React from 'react'

function Profile({userData}) {
  
  return (
    <div>
      <h1>User Profile</h1>
      <ul>
        <li className="list-group-item">name: {userData.name}</li>
        <li className="list-group-item">email: {userData.email}</li>
      </ul>
    </div>
  )
}

export default Profile