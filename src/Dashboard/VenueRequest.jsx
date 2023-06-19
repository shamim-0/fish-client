import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const VenueRequest = () => {



    const [venue , setVenue] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/test-venue')
        .then(res=> res.json())
        .then(data => setVenue(data))
    },[])

    console.log(venue);

    return (
        <div>
            <h1>Cathing fish and release request</h1>

            <section className='grid md:grid-cols-3 grid-cols-1 gap-5  my-20 p-5'>
                {
                    venue.map(venue => {
                        return <div className='bg-[#e9d2a9] shadow-lg border-4 border-white'>
                            <img className='h-60 w-full' src={venue?.imgdata[0] ? 'https://' + venue?.imgdata[0] : ''} alt="" />
                            <p className='my-3 px-3 text-sm text-blue-950'>{venue?.eventTitle}</p>
                            <div className='border my-3 border-dashed border-blue-950'></div>
                            <div className='mt-5 flex justify-between gap-5 text-blue-950 px-5 py-2 my-3'>
                                <p className='flex justify-start gap-2'><LocationOnIcon className='we-icon-2 p-1 bg-blue-950 text-white rounded-full' />
                                    <p>{venue?.districtSelect}</p></p>
                                <Link to={`/dashboard/venue-test-request/${venue._id}`} className='bg-white px-5 py-2 rounded-sm'>View</Link>
                            </div>
                        </div>
                    })
                }
            </section>
        </div>
    );
};

export default VenueRequest;