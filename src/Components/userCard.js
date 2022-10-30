import React from 'react'

const UserCard = ({ userData }) => {
  const userName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
  const genders = `${userData.gender}`;
  const ages = `${userData.dob.age}`;
  const house = `${userData.location.city}`;
  const mail = `${userData.email}`;
  return (
    <div>
       <section className="box">
           <img
             className="user-image"
             src={userData.picture.large}
             alt="userProfilePicture"
            />
           <div className='user-text'>
              <p>{userName}</p>
              <p>{ages}</p>
              <p>{genders}</p>
              <p>{house}</p>
              <p>{mail}</p>
           </div>
       </section>
    </div>
  )
}

export default UserCard