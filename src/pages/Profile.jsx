import React from 'react'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='container text-center align-item-center mt=4'>
        <div>
            <img src="https://i.pravatar.cc/200" alt="no image" className='img-fluid rounded-circle '  />
        </div>
        <h3>
            Welcome, back {user.fname}
        </h3>
        <hr />
        <h4>Fullname: {user.fname} {user.lname}</h4>
        <h4>Email: {user.email}</h4>
    </div>

  )
}

export default Profile