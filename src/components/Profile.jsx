import React, {useState} from 'react'
import profileImage from '../assets/profile.png'
import fStar from '../assets/fillStar.svg'
import nStar from '../assets/NotFillStar.svg'
import Star from '../Star'


const Profile = (props) => {
    const [user, setUser] = useState(
    {
        fristName: 'Kehinde',
        lastName: 'Daniels',
        phone: '09052463881',
        email: 'kehindedaniels@yahoo.com',
        isFavourite: false,
        src: profileImage
    }
)

let star = user.isFavourite? fStar: nStar;

function handleFavourite(){
    setUser(prevUser=>( {...prevUser, isFavourite: !prevUser.isFavourite}))
}
  return (
    <>
       <div className="profile bg-slate-200 rounded-md p-8 flex flex-col items-center">
            <img className='w-[150px] ' src={user.src} alt="" />
            <Star
                src={star}
                onclick={handleFavourite}
            /> 
            <p>my name is {props.Uname} </p>
            <p className='mt-6 text-xl font-medium '>Mr {user.fristName} {user.lastName}</p>
            <p className='text-xl font-medium '>{user.phone}</p>
       </div> 

    </>
  )
}

export default Profile