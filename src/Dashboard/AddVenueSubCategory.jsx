import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AddVenueSubCategory = () => {


    const [category , setCategory] = useState([])


    const handleAddCategory = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const order = e.target.order.value;
        const data = { name, order }

        fetch('http://localhost:5000/venue-sub-category-add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast.success('Sub category Added Successful')
                    e.target.reset()
                }
            })
    }


    const handleDeleteCategory = (_id)=>{
        const url =  `http://localhost:5000/venue-sub-category-delete?_id=${_id}`
        fetch(url, {
            method: "DELETE"
        })
        .then(res=> res.json())
        .then(data=> {
            if(data){
                toast.success('Delete successful')
            }
        });
    }



    useEffect(()=>{
        fetch('http://localhost:5000/venue-sub-category-get')
        .then(res=> res.json())
        .then(data => setCategory(data))
    }, [handleDeleteCategory, handleAddCategory])

    return (
        <div className='p-5'>
            <h2 className='text-xl font-medium my-5 text-center title'>Add Venue sub Category</h2>
            <div>
                <form onSubmit={handleAddCategory}>


                    <table className='text-sm'>
                        <tr>
                            <th>Name</th>
                            <th>Order</th>
                            <th>Action</th>
                        </tr>

                        {
                            category.map(cate=> <tr>
                                <td>{cate.name}</td>
                                <td>{cate.order}</td>
                                <td><label onClick={()=> handleDeleteCategory(cate._id)} className='block text-red-500 cursor-pointer'>DELETE</label></td>
                            </tr>)
                        }

                        <tr>
                            <td><input required className='p-2 w-full' type="text" name='name' placeholder='Category Name' /></td>
                            <td><input required className='p-2 w-full' type="number" name='order' placeholder='Category Order' /></td>
                            <td><button className='bg-gradient-to-tr text-sm block  from-teal-600 to-green-500  px-5 py-2 text-white uppercase font-bold'>Add New</button></td>
                        </tr>
 
                    </table>

                    
                    
                    
                </form>
            </div>

        </div>
    );
};

export default AddVenueSubCategory;