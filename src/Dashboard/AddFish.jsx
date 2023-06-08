import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { toast } from 'react-toastify';

const AddFish = () => {


    const [fish, setFish] = useState([])

    const handleRemove = (e) => {
        const check = window.confirm("Are you sure you want to delete?");
        if (check === true) {
            fetch(`http://localhost:5000/fish_chart_delete?id=${e}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }};

        const handleAddFish = (event) => {
            event.preventDefault();
            const name = event.target.name.value;

            const one = event.target.one.value;
            const two = event.target.two.value;
            const three = event.target.three.value;
            const four = event.target.four.value;
            const five = event.target.five.value;
            const six = event.target.six.value;
            const av = parseInt(one) + parseInt(two) + parseInt(three) + parseInt(four) + parseInt(five) + parseInt(six);
            let total = av / 6;
            let average = Math.ceil(total)
            const data = { name, average, one, two, three, four, five, six }





            fetch('http://localhost:5000/fist_chart', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Fish Added successful')
                    event.target.reset();
                })
            console.log(average)
        }





        useEffect(() => {
            fetch('http://localhost:5000/fist_chart')
                .then(res => res.json())
                .then(data => setFish(data))
        }, [handleRemove])






        return (
            <form onSubmit={handleAddFish} className='p-5'>
                <h1 className='my-5 text-center '>Fish Price chart per kg (Create data table)</h1>
                <table className='text-sm'>
                    <tr>
                        <th>Name</th>
                        <th>Average</th>
                        <th>0 - 0.5</th>
                        <th>0.5 - 1.25</th>
                        <th>1.25 - 2.25</th>
                        <th>2.25 - 3.25</th>
                        <th>3.25 - 5.0</th>
                        <th>5++</th>
                        <th>Action</th>
                    </tr>

                    {
                        fish.map(fishes => {
                            return <tr>
                                <td>{fishes.name}</td>
                                <td>{fishes.average}</td>
                                <td>{fishes.one}</td>
                                <td>{fishes.two}</td>
                                <td>{fishes.three}</td>
                                <td>{fishes.four}</td>
                                <td>{fishes.five}</td>
                                <td>{fishes.six}</td>
                                <td className='text-center ' onClick={() => handleRemove(fishes._id)}><span className='text-red-500 px-5 cursor-pointer rounded-2xl'><RemoveCircleIcon /></span></td>
                            </tr>
                        })
                    }

                    <tr>
                        <td><input type="text" name='name' className='border p-2' placeholder='Name' /></td>
                        <td><input type="number" disabled name='average' className='border p-2 w-20' placeholder='Average' /></td>
                        <td><input type="number" name='one' required className='border p-2 w-20' placeholder='' /></td>
                        <td><input type="number" name='two' required className='border p-2 w-20' placeholder='' /></td>
                        <td><input type="number" name='three' required className='border p-2 w-20' placeholder='' /></td>
                        <td><input type="number" name='four' required className='border p-2 w-20' placeholder='' /></td>
                        <td><input type="number" name='five' required className='border p-2 w-20' placeholder='' /></td>
                        <td><input type="number" name='six' required className='border p-2 w-20' placeholder='' /></td>
                        <td><button className='bg-blue-950  px-5 py-1 text-white font-medium'><AddIcon /></button></td>
                    </tr>

                </table>

            </form>
        );
    };

    export default AddFish;