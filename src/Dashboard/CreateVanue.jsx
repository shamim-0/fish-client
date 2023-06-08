import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';


const CreateVenue = () => {
    const [tab, setTab] = useState(5);
    const [fish, setFish] = useState([]);
    const [fish_chart, setFish_chart] = useState([]);
    const [allFishWeight, setAllFishWeight] = useState(0)
    const [allFishprice, setAllFishprice] = useState(0)

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

        const one_p = parseInt(CurrentFish.one)  *  parseInt(one_Kg);
        const two_p = parseInt(CurrentFish.two)  *  parseInt(two_Kg);
        const three_p = parseInt(CurrentFish.three)  *  parseInt(three_Kg);
        const four_p = parseInt(CurrentFish.four)  *  parseInt(four_Kg);
        const five_p = parseInt(CurrentFish.five)  *  parseInt(five_Kg);
        const six_p = parseInt(CurrentFish.six)  *  parseInt(six_Kg);
        const total_p_for_one_fish = parseInt(one_p) + parseInt(two_p) + parseInt(three_p) + parseInt(four_p) + parseInt(five_p) + parseInt(six_p);
        const totalWeight =  parseInt(one_Kg) +  parseInt(two_Kg) +  parseInt(three_Kg) +  parseInt(four_Kg) +  parseInt(five_Kg) +  parseInt(six_Kg) ;
        console.log(total_p_for_one_fish, totalWeight)
        const data = { fish_name, fish_average, one_Kg, two_Kg, three_Kg, four_Kg, five_Kg, six_Kg , total_p_for_one_fish , totalWeight};
        setFish_chart(prevFishChart => [...prevFishChart, data]);
        setAllFishWeight(allFishWeight + totalWeight);
        setAllFishprice(allFishprice + total_p_for_one_fish);

       console.log(allFishprice + total_p_for_one_fish);
       console.log(allFishWeight + totalWeight);
    }
 

    // console.log(fish_chart)

    useEffect(() => {
        fetch('http://localhost:5000/fist_chart')
            .then(res => res.json())
            .then(data => setFish(data))
    }, [])

    return (
        <div className='p-5'>
            <h2 className='text-3xl font-medium my-5 text-center title text-blue-950'>
                {tab === 1 ? 'Venue Information' : ''}
                {tab === 2 ? 'Venue Place & Time' : ''}
                {tab === 3 ? 'Venue Information' : ''}
                {tab === 4 ? 'Venue Term' : ''}
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
                    <input type="text" className="py-2 px-3  mb-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800" placeholder="Event Title " />
                    <select name="" id="" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select category---</option>
                    </select>
                    <select name="" id="" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select sub category---</option>
                    </select>
                    <p className='text-blue-950 mt-4'>Upload Image</p>
                    <input type="file" className='py-2 px-3  mt-1 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    <p className='text-blue-950 mt-4'>Upload Video</p>
                    <input type="file" className='py-2 px-3  mt-1 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />

                </div>

                <div className='text-end'>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm  mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            {/* tab 2  */}

            <div className={`${tab === 2 ? 'block' : 'hidden'} mt-16 w-full`}>

                <div className=''>
                    <textarea className='h-24 w-full mt-5 py-1 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded shadow  border placeholder:title' placeholder='Event Description'></textarea>
                    <input type="text" placeholder='Google map iframe Link' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    <input type="text" placeholder='Address [Full address]' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(1)} className=' bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>

            {/* tab 3  */}
            <div className={`${tab === 3 ? 'block' : 'hidden'} mt-16 `}>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <select className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800'>
                        <option value="">---Targeted Fish---</option>
                        <option value="">1</option>
                        <option value="">1</option>
                    </select>
                    <input type="number" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                </div>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>

                    <label className='mt-3'>
                        <p className='text-blue-950'>Start Time</p>
                        <input type="time" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                    </label>
                    <label className='mt-3'>
                        <p className='text-blue-950'>End Time</p>
                        <input type="time" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                    </label>

                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 4 ? 'block' : 'hidden'} mt-16 `}>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <input type="number" className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Total seat' />
                    <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Water label (Foot)' />
                    <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Gap between seat to seat (foot)' />
                    <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Contact Number' />
                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(5)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 5 ? 'block' : 'hidden'} mt-16 `}>

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
                        <td><input type="number" defaultValue={0} id='one_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='two_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='three_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='four_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='five_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><input type="number" defaultValue={0} id='six_kg' required className='border p-2 w-20' placeholder='(kg)' /></td>
                        <td><button onClick={handleAddFish} className='bg-blue-950  px-5 py-1 text-white font-medium'><AddIcon /></button></td>
                    </tr>



                </table>



                




                <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                <button className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
            </div>

        </div>
    );
};

export default CreateVenue;







// Khulna Division

// Dhaka Division

// Rajshahi Division