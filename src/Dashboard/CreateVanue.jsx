import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import DataLoad from '../DataLoad/DataLoad';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const CreateVenue = () => {
    const [tab, setTab] = useState(1);
    const [fish, setFish] = useState([]);
    const [category, setCategory] = useState([]);
    const [categorySub, setSubCategory] = useState([]);
    const [fish_chart, setFish_chart] = useState([]);
    const [allFishWeight, setAllFishWeight] = useState(0)
    const [allFishprice, setAllFishprice] = useState(0);
    const [load, setLoad] = useState(false);
    const [fishingDay, setFishingDay] = useState([]);
    const navigate = useNavigate();
    const [imgdata, setImgData] = useState([]);








    useEffect(() => {
        fetch('http://localhost:5000/venue-category-get')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])


    useEffect(() => {
        fetch('http://localhost:5000/venue-sub-category-get')
            .then(res => res.json())
            .then(data => setSubCategory(data))
    }, [])


    const handleAddFish = () => {
        const fish_name = document.getElementById('fish_name').value;
        const one_Kg = document.getElementById('one_kg').value;
        const two_Kg = document.getElementById('two_kg').value;
        const three_Kg = document.getElementById('three_kg').value;
        const four_Kg = document.getElementById('four_kg').value;
        const five_Kg = document.getElementById('five_kg').value;
        const six_Kg = document.getElementById('six_kg').value;
        const fish_average = 300;
        const CurrentFish = fish.find((fish) => fish.name === fish_name);
        console.log(CurrentFish);

        const one_p = parseInt(CurrentFish.one) * parseInt(one_Kg);
        const two_p = parseInt(CurrentFish.two) * parseInt(two_Kg);
        const three_p = parseInt(CurrentFish.three) * parseInt(three_Kg);
        const four_p = parseInt(CurrentFish.four) * parseInt(four_Kg);
        const five_p = parseInt(CurrentFish.five) * parseInt(five_Kg);
        const six_p = parseInt(CurrentFish.six) * parseInt(six_Kg);
        const total_p_for_one_fish = parseInt(one_p) + parseInt(two_p) + parseInt(three_p) + parseInt(four_p) + parseInt(five_p) + parseInt(six_p);
        const totalWeight = parseInt(one_Kg) + parseInt(two_Kg) + parseInt(three_Kg) + parseInt(four_Kg) + parseInt(five_Kg) + parseInt(six_Kg);
        console.log(total_p_for_one_fish, totalWeight)
        const data = { fish_name, fish_average, one_Kg, two_Kg, three_Kg, four_Kg, five_Kg, six_Kg, total_p_for_one_fish, totalWeight };
        setFish_chart(prevFishChart => [...prevFishChart, data]);
        setAllFishWeight(allFishWeight + totalWeight);
        setAllFishprice(allFishprice + total_p_for_one_fish);
    }

    useEffect(() => {
        fetch('http://localhost:5000/fist_chart')
            .then(res => res.json())
            .then(data => setFish(data))
    }, [])



    const handleUploadImg = () => {
        const image_file = document.getElementById('image_file').files[0];
        if (image_file) {
            var formData = new FormData();
            formData.append("file", image_file);

            fetch("https://upload.rainbosoft.com/", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(data => setImgData(prevFishChart => [...prevFishChart, data.url]))
        }
    }



    const removeImgData = (dayName) => {
        setImgData(prevData => prevData.filter(day => day !== dayName));
      };

    console.log(imgdata)





    const handleAddVanue = () => {
        setLoad(true);
        const eventTitle = document.getElementById('event_title').value;
        const category = document.getElementById('category').value;
        const subCategory = document.getElementById('sub_category').value;
        const imageFile = document.getElementById('image_file').files[0];
        const videoFile = document.getElementById('video_file').files[0];;
        const eventDescription = document.getElementById('event_description').value;
        const mapLink = document.getElementById('map_link').value;
        const address = document.getElementById('address').value;
        const targetFish = document.getElementById('targetFish').value;
        const startTime = document.getElementById('start_time').value;
        const endTime = document.getElementById('end_time').value;
        const totalSeat = parseInt(document.getElementById('total_seat').value);
        const waterLabel = parseInt(document.getElementById('water_label').value);
        const gapBetweenSeats = parseInt(document.getElementById('gap_between_seats').value);
        const contactNumber = document.getElementById('contact_number').value;
        const how_to_go = document.getElementById('how_to_go').value;
        const build_by = document.getElementById('build_by').value;
        const aria_Length_in_Meter = document.getElementById('aria_Length_in_Meter').value;
        const aria_Wide_in_Meter = document.getElementById('aria_Wide_in_Meter').value;
        const total_Area = document.getElementById('total_Area').value;
        const districtSelect = document.getElementById('districtSelect').value;
        const divisionSelect = document.getElementById('divisionSelect').value;

        const time = Date.now();
        const status = 'pending';

        var formData = new FormData();
        formData.append("file", videoFile);

        fetch("https://upload.rainbosoft.com/", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.url) {
                    const video = data.url;
                    const venueData = {
                        eventTitle,
                        category,
                        subCategory,
                        eventDescription,
                        mapLink,
                        address,
                        targetFish,
                        startTime,
                        endTime,
                        totalSeat,
                        waterLabel,
                        gapBetweenSeats,
                        contactNumber,
                        fish_chart,
                        allFishWeight,
                        allFishprice,
                        imgdata,
                        video,
                        status,
                        how_to_go,
                        time,
                        build_by,
                        aria_Length_in_Meter,
                        aria_Wide_in_Meter,
                        total_Area,
                        fishingDay,
                        districtSelect,
                        divisionSelect
                    };


                    fetch('http://localhost:5000/venue', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(venueData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if(data){
                                toast.success('Venue Added Successful')
                                navigate('/dashboard/venue-list')
                            }
                        });
                }
            })

        setLoad(false);
    }


    const handleSelect = () => {
        const day = document.getElementById('day_of_fishing').value;
        const index = fishingDay.indexOf(day)
        if (index === -1) {
            setFishingDay(prevFishChart => [...prevFishChart, day]);
        } else {
            toast.warning('Already Added')
        }
        console.log(index)
    }

    const removeDay = (dayName) => {
        setFishingDay(prevData => prevData.filter(day => day !== dayName));
      };

    // console.log(fishingDay)




    if (load) {
        return <DataLoad />
    }



    return (
        <div className='p-5'>
            <h2 className='text-3xl font-medium my-5 text-center title text-blue-950'>
                {tab === 1 ? 'Venue Information' : ''}
                {tab === 2 ? 'Venue Place & Time' : ''}
                {tab === 3 ? 'Venue Information' : ''}
                {tab === 4 ? 'Venue Feature' : ''}
                {tab === 5 ? 'Fish Calculation' : ''}
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

            {/* tab 1  */}
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
                <div className='mt-10 gap-10'>
                    <input type="text" id='event_title' className="py-2 px-3  mb-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800" placeholder="Venue Title " />
                    <select name="" id="category" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select category---</option>
                        {
                            category.map(cate => <option>{cate.name}</option>)
                        }
                    </select>
                    <select name="" id="sub_category" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select sub category---</option>
                        {
                            categorySub.map(cate => <option>{cate.name}</option>)
                        }
                    </select>
                    <p className='text-blue-950 my-4'>Upload Image</p>
                    <div className='my-5 flex items-center gap-4'>
                        {
                            imgdata.map(img => <div>
                                <button onClick={()=>removeImgData(img)} className='bg-red-200 w-6 h-6 rounded-full'>X</button>
                                <img className='h-24 w-40 rounded-md' src={'https://' + img} alt='' /> 
                                </div>)
                        }
                    </div>
                    <label className='h-24 rounded-xl w-28 shadow-xl' htmlFor="image_file">
                        <img className='overflow-hidden h-24 rounded-xl border-4 border-slate-300 shadow-xl' src="https://unper.ac.id/wp-content/plugins/tutor/assets/images/placeholder-.jpg" alt="" />
                        <input hidden multiple onChange={handleUploadImg} type="file" id='image_file' className='py-2 px-3  mt-1 focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title w-28' />
                    </label>
                    <p className='text-blue-950 mt-4'>Upload Video</p>
                    <input type="file" id='video_file' className='py-2 px-3  mt-1 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />

                </div>

                <div className='text-end'>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm  mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            {/* tab 2  */}

            <div className={`${tab === 2 ? 'block' : 'hidden'} mt-16 w-full`}>

                <div className=''>
                    <textarea id='event_description' className='h-24 w-full mt-5 py-1 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded shadow  border placeholder:title' placeholder='Event Description'></textarea>
                    <input type="text" id='map_link' placeholder='Google map iframe Link' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    <input type="text" id='address' placeholder='Address [Postal address]' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    <select id="divisionSelect"  className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title'>
                        <option value="">Select Division</option>
                        <option value="Barisal">Barisal</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>

                    <select id="districtSelect"  className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title'>
                        <option value="">Select District</option>
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


                    <input type="text" id='how_to_go' placeholder='How to go' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />


                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(1)} className=' bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>

            {/* tab 3  */}
            <div className={`${tab === 3 ? 'block' : 'hidden'} mt-16 `}>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <select id='targetFish' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800'>
                        <option value="">---Targeted Fish---</option>
                        {
                            fish.map(fishes => {
                                return (
                                    <option value={fishes.name} >{fishes.name}</option>
                                )
                            })
                        }
                    </select>
                    <div>
                        <div className='flex flex-wrap gap-2 my-1'>
                            {
                                fishingDay.map(day => <button className='bg-gray-200 text-blue-900 text-xs px-2 rounded-lg'>{day}<button onClick={()=> removeDay(day)} className='bg-red-300  rounded-full h-4 w-4 ml-2'>X</button></button>)
                            }
                        </div>
                        <select onChange={handleSelect} id='day_of_fishing' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800'>
                            <option value="Monday" disabled selected>--select day of fishing--</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                        </select>
                    </div>
                </div>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>

                    <label className='mt-3'>
                        <p className='text-blue-950'>Start Time</p>
                        <input type="time" id='start_time' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                    </label>
                    <label className='mt-3'>
                        <p className='text-blue-950'>End Time</p>
                        <input type="time" id='end_time' className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                    </label>

                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 4 ? 'block' : 'hidden'} mt-16 `}>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <input type="number" id='total_seat' className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Total seat' />
                    <input type="number" id='water_label' className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Water label (Foot)' />
                    <input type="number" id='gap_between_seats' className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Gap between seat to seat (foot)' />
                    <input type="number" id='contact_number' className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Contact Number' />
                    <select id="build_by" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800'>
                        <option value="null" selected disabled>--select build by --</option>
                        <option value="Wood and Bamboo">Wood and Bamboo</option>
                        <option value="Wood and Bamboo">Wood and Bamboo</option>
                        <option value="On pond edge">On pond edge</option>
                        <option value="Other">Other</option>
                    </select>

                </div>
                <div className='mt-10'>
                    <p>Fishery Area</p>
                    <input type="number" id='aria_Length_in_Meter' className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder=' Length in Meter' />
                    <input type="number" id='aria_Wide_in_Meter' className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Wide in Meter' />
                    <input type="number" id='total_Area' className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Total Area( LxW)' />
                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(5)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 5 ? 'block' : 'hidden'} mt-16 `}>
                <div className='my-5'>
                    <button className='bg-gradient-to-tr from-teal-500 to-green-400 px-5 py-1 mx-2 rounded text-white text-sm'>Total weight : {allFishWeight}</button>
                    <button className='bg-gradient-to-tr from-teal-500 to-green-400 px-5 py-1 mx-2 rounded text-white text-sm'>Total Price : {allFishprice}</button>
                </div>
                <table className='text-sm'>
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
                        fish_chart.map(fish => <tr>
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
                    <tr>
                        <td>
                            <select name="" id="fish_name" className='border p-2'>
                                <option value="null" selected disabled>--select fish--</option>
                                {
                                    fish.map(fishes => {
                                        return (
                                            <option value={fishes.name} >{fishes.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </td>
                        {/* <td><input type="number" disabled name='average' className='border p-2 w-20' placeholder='Average' /></td> */}
                        <td><input type="number" defaultValue={0} id='one_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='two_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='three_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='four_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='five_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='six_kg' required className='border p-2 w-full' placeholder='(kg)' /></td>
                        <td colSpan={2}><button onClick={handleAddFish} className='bg-blue-950 w-full px-5 py-1 text-white font-medium'><AddIcon /></button></td>
                    </tr>



                </table>








                <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                <button onClick={handleAddVanue} className='bg-gradient-to-t from-teal-500 to-green-500  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Submit</button>
            </div>

        </div>
    );
};

export default CreateVenue;





