import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { toast } from 'react-toastify';
import Loading from '../Auth/Loading/Loading';

const SingleViewUser = () => {
    const { _id } = useParams();
    const [user, setUser] = useState({});
    const [modal, setModal] = useState(false)
    const [load, setLoad] = useState(false)


    const updateProfile =(e)=>{
        setLoad(true)
        e.preventDefault();

        const role = e.target.role.value;
        const status = e.target.status.value;
        const batch = e.target.batch.value;
        const data = {role, status, batch};

        fetch(`http://localhost:5000/update-user?_id=${_id}`, {
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=>{
            setLoad(false)
            setModal(false)
            toast.success('updated')

        })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/singleuser?_id=${_id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [updateProfile])


    if(load){
        return <Loading/> 
    }
   


    return (
        <main>
            <div className={`${modal ? 'block' : 'hidden'}`}>
                <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white  pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <SystemUpdateAltIcon/>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 w-full sm:mt-0 sm:text-left">
                                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Update User Profile account</h3>
                                            <form onSubmit={updateProfile} className="mt-2 w-full">
                                                <label className='flex items-center gap-5 mt-5'>
                                                    <p>Role:</p>
                                                    <select name="role" id="" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                                                        <option value="User">--Select Role--</option>
                                                        <option value="User">User</option>
                                                        <option value="Organizer">Organizer</option>
                                                        <option value="Volunteer">Volunteer</option>
                                                        <option value="Admin">Admin</option>
                                                    </select>
                                                </label>
                                                <label className='flex items-center gap-5 mt-3'>
                                                    <p>Batch:</p>
                                                    <select name="batch" id="" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                                                        <option value="Laddu Expert">--Select Batch --</option>
                                                        <option value="Laddu Expert">Laddu Expert</option>
                                                        <option value="Single hook Expert">Single hook Expert</option>
                                                        <option value="Long though Expert">Long though Expert</option>
                                                        <option value="Catfish Expert">Catfish Expert</option>
                                                        <option value="Catfish Expert">Catfish Expert</option>
                                                        <option value="Carp Expert">Carp Expert</option>
                                                        <option value="Bait Expert">Bait Expert</option>
                                                    </select>
                                                 </label>
                                                <label className='flex items-center gap-5 mt-3'>
                                                    <p>Status:</p>
                                                    <select name="status" id="" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                                                        <option value="Seliver">--Select Status --</option>
                                                        <option value="Seliver">Seliver</option>
                                                        <option value="Broncho">Broncho</option>
                                                        <option value="Gold">Gold</option>
                                                    </select>
                                                </label>

                                                <button className='bg-green-500 text-white font-bold px-5 py-2 mt-5'>Save</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    
                                    <button onClick={()=> setModal(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='p-5 grid grid-cols-3 gap-5 justify-between items-start d'>
                <div className='bg-blue-500 border-8 border-white shadow-lg text-center p-5'>
                    <img className='h-40 w-40 rounded-full mx-auto mt-5 border-2 border-white shadow-lg' src={'https://' + user?.photo} alt="" />
                    <button className='bg-orange-500 text-xs px-2 rounded-2xl'>{user.Batch_tag}</button>
                    <p className='mt-5 text-xl font-bold  text-white'>{user.name}</p>
                    <p className='mt-2  font-bold  text-white uppercase'>{user.bio}</p>
                    <button onClick={()=> setModal(true)} className='mt-5 px-5 py-2 bg-white text-blue-950'>Update</button>
                </div>
                <div className=''>
                    <h1 className='bg-blue-900 w-full  text-white p-2 px-5 shadow flex items-center'><LockIcon /> Personal Information</h1>
                    <div className='bg-white p-5 border-2 border-white '>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Email : {user.email}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Phone :{user.phone}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Address: {user.address}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Date of Birth :{user.birth}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Interested Align Fish :  {user.interest}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Award : {user.Award}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Status : {user.status}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Role : {user.role}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' /> Bacth Tag : {user.Batch_tag}</h5>
                    </div>
                </div>
                <div>
                    <h1 className='bg-blue-900 w-full  text-white p-2 px-5 shadow flex items-center'><LockIcon /> Emergency  Contact</h1>
                    <div className=' p-5 border-2 border-white'>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' />Name : {user.ec_name}</h5>
                        <h5 className='mt-2'> <KeyboardDoubleArrowRightIcon className='text-green-500' />Relation : {user.ec_relation}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' />phone : {user.ec_phone}</h5>
                        <h5 className='mt-2'><KeyboardDoubleArrowRightIcon className='text-green-500' />Address : {user.ec_address}</h5>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleViewUser;