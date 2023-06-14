import React, { useEffect, useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [user, setUser] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=> res.json())
        .then(data=> setUser(data))
    }, [])

    return (
        <div>
            <div className="mt-7 overflow-x-auto px-5">

                <div className='my-10 text-end'>
                    <input type="text" placeholder='Search user ' className='border border-blue-950 rounded-full w-1/2 focus:outline-none p-2' />
                </div>
                        <table className="w-full whitespace-nowrap border p-3">
                            <tbody>
                                <tr tabindex="0" className="focus:outline-none h-12 mb-2 border border-gray-100 text-sm font-semibold rounded w-full text-gray-600 px-3">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Photo</th>
                                    <th>Role</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                {
                                    user.map(users=> {
                                   return (
                                    <tr tabindex="0" className="focus:outline-none font-semibold text-sm h-12 py-3 my-2 border border-gray-100  text-gray-600 px-3 rounded">
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td>{users.phone}</td>
                                    <td>{users.address}</td>
                                    <td ><img className='h-12 w-12 rounded-full border border-blue-950' src={'https://'+users.photo} alt="" /></td>
                                    <td><button className='bg-blue-900 px-3 py-1 rounded-2xl text-white'>{users.role}</button></td>
                                    <td><Link to={`user/${users._id}`} className='bg-blue-900 px-3 py-1 rounded-2xl text-white'>view</Link></td>
                                    <td><button className='bg-red-600 px-3 py-1 rounded-2xl text-white'>Delete</button></td>
                                     </tr>
                                   )
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default UserList;