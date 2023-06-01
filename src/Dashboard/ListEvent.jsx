import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ListEvent = () => {

    return (
        <div className='p-3'>
            <div className="sm:px-6 w-full">
                <div className="px-4 md:px-10 py-4 md:py-7">
                    <div className="flex items-center justify-between">
                        <p tabindex="0" className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Event</p>
                        
                    </div>
                </div>
                <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                    <div className="flex items-center justify-between">
                        <Link to='/dashboard/create-event' className="text-sm bg-red-500 rounded-2xl px-5 p-1 text-white font-bold">
                            Create Event
                        </Link>
                        <div className='flex gap-3'>
                            <button className='bg-green-400 px-2 py-1 rounded-sm text-white'>Download</button>
                            <button className='bg-blue-400 px-2 py-1 rounded-sm text-white'>Print</button>
                            <button className='bg-red-500 px-2 py-1 rounded-sm text-white'>Delete</button>
                            <button className='bg-orange-400 px-2 py-1 rounded-sm text-white'>Published</button>
                        </div>
                    </div>
                    <div className='text-end'>
                    <input type="text" className="py-2 px-3  focus:outline-0 ms-auto bg-white  border-slate-200 rounded-full mt-5 w-1/2   border placeholder:text-stone-800" placeholder='search hare' />
                    </div>
                    <div className="mt-7 overflow-x-auto">
                        <table className="w-full whitespace-nowrap border p-3">
                            <tbody>
                                <tr tabindex="0" className="focus:outline-none h-10 border border-gray-100 text-sm font-semibold rounded w-full text-gray-600 px-3">
                                    <td>#</td>
                                    <td>Event Title</td>
                                    <td>Category</td>
                                    <td>Venue</td>
                                    <td>view</td>
                                    <td>status</td>
                                    <td>Action</td>
                                </tr>
                                {/* <tr className="h-3"></tr> */}
                                <tr tabindex="0" className="focus:outline-none font-semibold text-sm h-10 border border-gray-100  text-gray-600 px-3 rounded">
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>Bralala</td>
                                    <td>Paid</td>
                                    <td>Dhaka</td>
                                    <td><RemoveRedEyeIcon className='text-green-400'/></td>
                                    <td ><span className='bg-yellow-400 text-center px-3 py-1 rounded-2xl' >Upcoming</span></td>
                                    <td className=''>
                                        <DriveFileRenameOutlineIcon className='mx-2 text-green-500'/>
                                        <DeleteIcon className='mx-2 text-red-500'/>
                                    </td>
                                </tr>
                                <tr tabindex="0" className="focus:outline-none font-semibold text-sm h-10 border border-gray-100  text-gray-600 px-3 rounded">
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td>Bralala</td>
                                    <td>Paid</td>
                                    <td>Dhaka</td>
                                    <td><RemoveRedEyeIcon className='text-green-400'/></td>
                                    <td ><span className='bg-yellow-400 text-center px-3 py-1 rounded-2xl' >Upcoming</span></td>
                                    <td className=''>
                                        <DriveFileRenameOutlineIcon className='mx-2 text-green-500'/>
                                        <DeleteIcon className='mx-2 text-red-500'/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ListEvent;