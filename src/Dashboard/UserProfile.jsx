import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/Firebase.init';
import Loading from '../Auth/Loading/Loading';

const UserProfile = () => {

    const [user , setUser] = useState({});
    const [users, loading, error] = useAuthState(auth)

    // useEffect(()=>{
       
    // }, [users?.email])


    if(loading){
        return <Loading/>
    }

    // if(users){
    //     fetch(`http://localhost:5000/user-email?email=${users.email}`)
    //     .then(res=> res.json())
    //     .then(data=> setUser(data))
    // }



    return (
        <div className='p-5 bg-blue-300'>
           <div>
                {/* {
                    console.log(user)
                } */}
           </div>
        </div>
    );
};

export default UserProfile;