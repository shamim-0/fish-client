import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firebase.init';
import { HeadsetMicSharp } from '@mui/icons-material';
import Loading from './Loading/Loading';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const Update = () => {

    const [load, setLoad] = useState(false);
    const [user, loading, error] = useAuthState(auth);

    const [tab, setTab] = useState(1);


    if (load) {
        return <Loading />
    }

    const handleUpdate = (e) => {
        setLoad(true)
        e.preventDefault();
        const time = Date.now()
        var file = e.target.photo.files[0];
        var formData = new FormData();
        formData.append("file", file);

        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                const email = user.email;
                const name = e.target.name.value;
                const phone = e.target.phone.value;
                const photo = data.url;
                const address = e.target.address.value;
                const birth = e.target.Birth.value;
                const interest = e.target.interest.value;
                const Award = e.target.Award.value;
                const bio = e.target.bio.value;
                const role = 'user';
                const Batch_tag = 'Laddu Expert';
                const  status = 'seliver';
                // ec info 
                const ec_name = e.target.ec_name.value;
                const ec_relation = e.target.ec_relation.value;
                const ec_phone = e.target.ec_phone.value;
                const ec_address = e.target.ec_address.value;
                const balance_bdt = 0;


                const info = { email, name, phone, photo, address, role, birth, interest, Award, status , bio , Batch_tag, ec_name , ec_relation, ec_phone, ec_address, balance_bdt, time}
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                    localStorage.setItem('profile', 'complete')
                setLoad(false)
            })
            .catch(error => {
                setLoad(false)
                console.log(error)
            });
    }

    return (
        <div className='p-5'>
            <h2 className='text-3xl font-medium my-5 text-center title text-blue-950'>
                {tab === 1 ? 'Personal Information' : ''}
                {tab === 2 ? 'About & Experience' : ''}
                {tab === 3 ? 'Emergency Contact (EC)' : ''}
                {tab === 4 ? 'Venue Term' : ''}
            </h2>


            {/* div  1st section     */}

            <section className='flex justify-center items-center'>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    {tab >= 1 ? <CheckIcon></CheckIcon> : 1}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    {tab >= 2 ? <CheckIcon></CheckIcon> : 2}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    {tab >= 3 ? <CheckIcon></CheckIcon> : 3}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    4
                </div>

            </section>

            <form onSubmit={handleUpdate}>

            {/* tab 1  */}
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
                <div className='mt-10 grid grid-cols-2 gap-5'>
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Enter your name ?' name='name' />
                    <input type="number" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Enter your phone ?' name='phone' />
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Address' name='address' />
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Date of Birth' name='Birth' />
                </div>

                <div className='text-end'>
                    <label onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  w-28 cursor-pointer block  px-4 py-2 rounded-sm  mt-10 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </label>
                </div>
            </div>
            {/* tab 1  */}
            <div className={`${tab === 2 ? 'block' : 'hidden'}`}>
                <div className='mt-10 grid grid-cols-2 gap-5'>
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Award' name='Award' />
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" placeholder='Interest Angling (fish tag by comma)' name='interest' />
                    <label>
                        <p className='px-5 text-start'>Upload Image</p>
                        <input name='photo' type="file" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800 mt-3" />
                    </label>
                    <input type="text" className="py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800" placeholder='Bio' name='bio' />
                </div>

                <div className='text-end mt-5 block'>
                    <label onClick={() => setTab(1)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  cursor-pointer  px-4 py-2 rounded-sm  mt-10 mx-auto text-white'>PRV <ArrowForwardIcon className='text-white' /> </label>
                    <label onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  cursor-pointer ml-5 px-4 py-2 rounded-sm  mt-10  text-white'>Next <ArrowForwardIcon className='text-white' /> </label>
                </div>
            </div>
            {/* tab 1  */}
            <div className={`${tab === 3 ? 'block' : 'hidden'}`}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                        <input type="text" placeholder='EC Name'  name='ec_name' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800'/>
                        <input type="text" placeholder='EC Relation'  name='ec_relation' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800'/>
                        <input type="text" placeholder='EC Mobile'  name='ec_phone' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800'/>
                        <input type="text" placeholder='EC Address'  name='ec_address' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded   border placeholder:text-stone-800'/>
                    </div>
                <div className='mt-5 text-end'>
                    <label onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]   cursor-pointer   px-4 py-2 rounded-sm    text-white'>PRV <ArrowForwardIcon className='text-white' /> </label>
                    <button  className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  cursor-pointer  px-4 py-2 rounded-sm  ml-5 text-white'>Submit <ArrowForwardIcon className='text-white' /></button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Update;





