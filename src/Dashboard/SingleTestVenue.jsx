import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EditNoteIcon from '@mui/icons-material/EditNote';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

import Poster from '../assets/porter.jpg'
import { toast } from 'react-toastify';

const SingleTestVenue = () => {

    const { _id } = useParams();
    const [venue, setVenue] = useState({});
    const [viewImg, setViewImg] = useState('');
    const [modal, setModal] = useState('hidden');









    const reject = () => {

        const message = document.getElementById('message').value;

        const url = `http://localhost:5000/test-venue?_id=${_id}&status=Rejeceted`;
        fetch(url, {
            method: "PUT",
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify({message})
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast.success('Rejected This venue')
                    setModal('hidden')
                }
            })
        console.log(url);
    }







    const calculateTimeAgo = (timestamp) => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - timestamp;
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
        }
    };

    // Example usage:
    const postTime = 1686508193253;
    const timeAgo = calculateTimeAgo(postTime);
    console.log(timeAgo);


    const testFishing = () => {
        const url = `http://localhost:5000/test-venue?_id=${_id}&status=Testing`
        fetch(url, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Accepted And available for Testing')
            })
        console.log(url);
    }
    

    useEffect(() => {
        const url = `http://localhost:5000/single-venue?_id=${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setVenue(data);
                setViewImg(data.imgdata[0])
            })
    }, [testFishing, reject])

    return (
        <main>
            <div className='p-5 grid grid-cols-3 gap-10'>
                <div className=''>
                    <img controls className='w-full' src={venue.imgdata ? 'https://' + viewImg : ''} alt="" />
                    <div className='flex justify-start mt-3 gap-2'>
                        {
                            venue?.imgdata?.map(img => <img onClick={() => setViewImg(img)} className='w-24 border-2 cursor-pointer border-red-300' src={'https://' + img} alt="" />)
                        }
                    </div>

                </div>
                <div className=''>
                    <h2 className='text-2xl font-bold text-blue-900'>{venue.eventTitle} <button className='bg-orange-500 px-5 text-xs rounded-3xl uppercase text-white'>{venue.status}</button></h2>
                    <div className='my-5'>
                        <button className='bg-slate-100 px-5 mx-1 text-sm uppercase rounded-3xl'>{venue.category}</button>
                        <button className='bg-slate-100 px-5 mx-1 text-sm uppercase rounded-3xl'>{venue.subCategory}</button>
                    </div>
                    <h3 className='text-blue-950 text-sm mb-5'>{venue.eventDescription}</h3>
                    {/* <h3>{venue.mapLink}</h3> */}

                    <hr className='my-2' />

                    <div >
                        <h2 className='my-3 text-blue-950'>Day Of Fishing </h2>

                        <div>
                            {
                                venue?.fishingDay?.map(day => <button className='bg-blue-950 text-xs px-2 text-white rounded-3xl mx-1'>{day}</button>)
                            }
                        </div>
                    </div>




                    {/* <h3>{venue.allFishWeight}</h3>
                <h3>{venue.allFishprice}</h3> */}

                </div>
                <div className='p-5'>
                    <div className='flex items-center gap-2'>
                        <LocationOnIcon />
                        <h3>{venue.address}</h3>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LocationOnIcon />
                        <p className='my-3 '>{venue.divisionSelect}, {venue.districtSelect}</p>
                    </div>

                    <hr />

                    <div>
                        <h3 className='mt-3 flex items-center gap-2'> <LocalPhoneIcon /> {venue.contactNumber}</h3>
                        {/* <h3>{venue.time}</h3> */}
                        <h3 className='mt-3 flex items-center gap-2'><AccessTimeIcon />  {calculateTimeAgo(parseInt(venue.time))}</h3>
                    </div>
                    <h3 className='my-5 text-sm'>How to Go : {venue.how_to_go}</h3>

                    <div>
                        <h4>Start Time : <span className='bg-gradient-to-tr from-blue-900 to-teal-700 px-5 py-1 text-white text-sm rounded-full'>{ venue?.fishingDay ? venue?.fishingDay[0] : ''} <TrendingFlatIcon/>  {venue.startTime}</span></h4> 
                        <h4>to</h4> 
                        <h4>End Time : <span className='bg-gradient-to-tr from-blue-900 to-teal-700 px-5 py-1 text-white text-sm rounded-full'>{ venue?.fishingDay ? venue?.fishingDay[venue?.fishingDay.length-1] : ''} <TrendingFlatIcon/> {venue.endTime}</span></h4> 
                    </div>
                </div>
            </div>


            <div className='flex gap-10 p-5'>
                {/* second element  */}
                <video controls poster={Poster} className='w-1/3' src={'https://' + venue.video}></video>


                <div className='w-2/3'>
                    <h3 className='my-4 text-blue-950'>Feature</h3>
                    <hr />
                    <div className='grid grid-cols-2 gap-5'>

                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Targeted Fish :  {venue.targetFish}</span></span>
                        </div>


                        {/* <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Start Time:  {venue.startTime}</span></span>
                        </div>


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>End Time : {venue.endTime}</span></span>
                        </div> */}


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Total Sit:  {venue.totalSeat}</span></span>
                        </div>


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Water Lavel :  {venue.waterLabel}</span></span>
                        </div>


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Gap Between Seats : {venue.gapBetweenSeats}</span></span>
                        </div>


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Seat Build By : {venue.build_by}</span></span>
                        </div>
                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Total Area : Aria Length : {venue.aria_Length_in_Meter} m </span></span>
                        </div>


                        <div class="info_item">
                            <span class="info_item_img">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </span>
                            <span class="info_item_content"><span>Total Area : {venue.total_Area} </span></span>
                        </div>


                    </div>
                </div>

            </div>

            <div className='flex gap-10 p-5'>


                <iframe src={venue.mapLink} className='w-1/3 mt-10 block' height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className='w-2/3'>
                    <button className='bg-gradient-to-tr my-2 from-teal-500 to-green-400 px-5 py-1 mx-2 rounded text-white text-sm'>Total weight : {venue.allFishWeight}</button>
                    <button className='bg-gradient-to-tr my-2 from-teal-500 to-green-400 px-5 py-1 mx-2 rounded text-white text-sm'>Total Price : {venue.allFishprice}</button>

                    <table className='text-sm '>
                        <tr>
                            <th>Name</th>
                            {/* <th>Average</th> */}
                            <th className='text-sm'>0 - 0.5 </th>
                            <th className='text-sm'>0.5 - 1.25 </th>
                            <th className='text-sm'>1.25 - 2.25 </th>
                            <th className='text-sm'>2.25 - 3.25 </th>
                            <th className='text-sm'>3.25 - 5.0 </th>
                            <th className='text-sm'>5++ (kg)</th>
                            <th className='text-sm'>w</th>
                            <th className='text-sm'>P</th>
                        </tr>

                        {
                            venue?.fish_chart?.map(fish => <tr>
                                <td>{fish.fish_name}</td>
                                {/* <td>{fish.fish_average}</td> */}
                                <td>{fish.one_Kg}</td>
                                <td>{fish.two_Kg}</td>
                                <td>{fish.three_Kg}</td>
                                <td>{fish.four_Kg}</td>
                                <td>{fish.five_Kg}</td>
                                <td>{fish.six_Kg}</td>
                                <td>{fish.totalWeight}</td>
                                <td>{fish.total_p_for_one_fish}</td>
                            </tr>)
                        }

                    </table>
                </div>

            </div>


            <div className='p-5 flex gap-5'>
                <button onClick={testFishing} className='bg-blue-900 px-3 py-1 text-sm text-white rounded-sm'>Accept Test Request</button>
                <button onClick={()=> setModal('block')} className='bg-blue-900 px-3 py-1 text-sm text-white rounded-sm'>Reject</button>
                {/* onClick={reject} */}
            </div>


            <div class={`relative z-10 ${modal}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
                
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div class="">
                                    <div class="flex gap-4  my-4">
                                       
                                    <div className='bg-blue-100 flex items-center justify-center rounded-full text-blue-950 h-8 w-8'>
                                    <EditNoteIcon />
                                    </div>
                                    <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Special note Or Feedback</h3>
                                    </div>
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                       
                                        <div class="mt-2 w-full">
                                            <textarea  id="message" class="w-full px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset rounded"  rows='5'></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 gap-3">
                                <button type="button" onClick={reject} class="mt-3 inline-flex w-full justify-center rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Submit</button>
                                <button type="button" onClick={()=> setModal('hidden')} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};


export default SingleTestVenue;