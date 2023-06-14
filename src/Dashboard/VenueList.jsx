import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const VenueList = () => {


    const [venue, setVenue] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/venue?all=all`
        fetch(url)
            .then(res => res.json())
            .then(data => setVenue(data))
    }, [])

    const showAll = () => {
        const url = `http://localhost:5000/venue?all=all`
        fetch(url)
            .then(res => res.json())
            .then(data => setVenue(data))
    }

    const filterByDiv = (e) => {
        const url = `http://localhost:5000/venue?divisionSelect=${e}`
        fetch(url)
            .then(res => res.json())
            .then(data => setVenue(data))
    }
    const filterByDis = () => {
        const e = document.getElementById('filterByDis').value;
        const url = `http://localhost:5000/venue?districtSelect=${e}`
        fetch(url)
            .then(res => res.json())
            .then(data => setVenue(data))
    }

    console.log(venue);


    return (
        <div>
            <div className='p-5 flex justify-between items-center'>
                <h2>Venue List</h2>
                <div className='flex justify-end gap-3'>
                    <button onClick={showAll} className='bg-zinc-100 p-2 border-2 shadow-lg rounded-3xl focus:outline-none'>Show All</button>
                    <select className='p-2 border-2 shadow-lg rounded-3xl focus:outline-none'>
                        <option>--Filter By Division--</option>
                    </select>
                    <select id='filterByDis' onChange={filterByDis} className='p-2 border-2 shadow-lg rounded-3xl focus:outline-none'>
                        <option value="">Filter by District</option>
                        <option value="Bagerhat">Bagerhat</option>
                        <option value="Bandarban">Bandarban</option>
                        <option value="Barguna">Barguna</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Bhola">Bhola</option>
                        <option value="Bogra">Bogra</option>
                        <option value="Brahmanbaria">Brahmanbaria</option>
                        <option value="Chandpur">Chandpur</option>
                        <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chuadanga">Chuadanga</option>
                        <option value="Comilla">Comilla</option>
                        <option value="Cox's Bazar">Cox's Bazar</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Dinajpur">Dinajpur</option>
                        <option value="Faridpur">Faridpur</option>
                        <option value="Feni">Feni</option>
                        <option value="Gaibandha">Gaibandha</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Gopalganj">Gopalganj</option>
                        <option value="Habiganj">Habiganj</option>
                        <option value="Jamalpur">Jamalpur</option>
                        <option value="Jessore">Jessore</option>
                        <option value="Jhalokati">Jhalokati</option>
                        <option value="Jhenaidah">Jhenaidah</option>
                        <option value="Joypurhat">Joypurhat</option>
                        <option value="Khagrachhari">Khagrachhari</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Kishoreganj">Kishoreganj</option>
                        <option value="Kurigram">Kurigram</option>
                        <option value="Kushtia">Kushtia</option>
                        <option value="Lakshmipur">Lakshmipur</option>
                        <option value="Lalmonirhat">Lalmonirhat</option>
                        <option value="Madaripur">Madaripur</option>
                        <option value="Magura">Magura</option>
                        <option value="Manikganj">Manikganj</option>
                        <option value="Meherpur">Meherpur</option>
                        <option value="Moulvibazar">Moulvibazar</option>
                        <option value="Munshiganj">Munshiganj</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Naogaon">Naogaon</option>
                        <option value="Narail">Narail</option>
                        <option value="Narayanganj">Narayanganj</option>
                        <option value="Narsingdi">Narsingdi</option>
                        <option value="Natore">Natore</option>
                        <option value="Nawabganj">Nawabganj</option>
                        <option value="Netrakona">Netrakona</option>
                        <option value="Nilphamari">Nilphamari</option>
                        <option value="Noakhali">Noakhali</option>
                        <option value="Pabna">Pabna</option>
                        <option value="Panchagarh">Panchagarh</option>
                        <option value="Patuakhali">Patuakhali</option>
                        <option value="Pirojpur">Pirojpur</option>
                        <option value="Rajbari">Rajbari</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangamati">Rangamati</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Satkhira">Satkhira</option>
                        <option value="Shariatpur">Shariatpur</option>
                        <option value="Sherpur">Sherpur</option>
                        <option value="Sirajganj">Sirajganj</option>
                        <option value="Sunamganj">Sunamganj</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Tangail">Tangail</option>
                        <option value="Thakurgaon">Thakurgaon</option>
                    </select>
                </div>
            </div>
            <hr />

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
                                <Link to={`/dashboard/venue/${venue._id}`} className='bg-white px-5 py-2 rounded-sm'>View</Link>
                            </div>
                        </div>
                    })
                }
            </section>
        </div>
    );
};

export default VenueList;