import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Event = () => {
    return (
        <div className='max-w-6xl mx-auto my-20 px-5'>
            <h5 className='mt-10 text-2xl  font-bold text-blue-950'>Event</h5>
            <h5 className='text-blue-950'>Our Event organized Event and ticket hare</h5>
            <hr className='bg-blue-800' />

            <div className='flex justify-center items-center flex-wrap gap-5 my-10'>
                <button className='px-5 py-1 bg-gradient-to-t from-blue-950 to-cyan-700 rounded-sm text-white text-sm'>Popular  <ArrowDropDownIcon className='mb-[-30px] we-icon text-blue-950'></ArrowDropDownIcon></button>
                <button className='px-5 py-1 bg-gradient-to-t from-blue-950 to-cyan-700 rounded-sm text-white text-sm'>Upcoming</button>
                <button className='px-5 py-1 bg-gradient-to-t from-blue-950 to-cyan-700 rounded-sm text-white text-sm'>Featured</button>
            </div>

            <section className='max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10'>
                <div className='bg-[#fdecbc]  rounded-sm border-4 shadow-md border-white'>
                    <img className='h-40 w-full' src="https://cdn.britannica.com/97/98397-050-1D60E58E/Bass-fishing-Charles-county-Md.jpg" alt="" />
                    <div>
                        <h5 className='text-sm font-normal mt-5 text-blue-950 px-3 flex justify-between items-center flex-wrap'>Lorem ipsum dolor sit ?
                            <button className='bg-blue-950 text-white px-1 rounded-3xl text-xs'>24 jun</button>
                        </h5>
                        <div className='flex justify-between items-center mt-3 px-3'>
                            <button className='text-blue-950  rounded-3xl text-xs flex items-center'><LocationOnIcon /> Dinajpur</button>
                            <p className='font-bold bg-green-500 flex items-center gap-3 text-xs px-2 rounded-3xl text-white'><LocalActivityIcon></LocalActivityIcon>40</p>
                        </div>
                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <div className='flex justify-between items-center px-3'>
                            <button className='  border-white shadow text-blue-950 rounded-full'><MoreVertIcon/></button>
                            <h3 className='text-xl font-bold text-blue-950'>
                                ৳ ৪০০০
                            </h3>
                        </div>

                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <button className='flex items-center justify-center bg-gradient-to-t from-blue-900 to-cyan-800 w-full mt-5 text-white py-2 text-center'>Show More >> </button>
                    </div>
                    
                </div>
                <div className='bg-[#fdecbc]  rounded-sm border-4 shadow-md border-white'>
                    <img className='h-40 w-full' src="https://spectacularnwt.com/sites/default/files/styles/hero_desktop/public/nmc_tp_lynxlake_178.jpg?itok=bjpV4KnJ" alt="" />
                    <div>
                        <h5 className='text-sm font-normal mt-5 text-blue-950 px-3 flex justify-between items-center flex-wrap'>Lorem ipsum dolor sit ?
                            <button className='bg-blue-950 text-white px-1 rounded-3xl text-xs'>24 jun</button>
                        </h5>
                        <div className='flex justify-between items-center mt-3 px-3'>
                            <button className='text-blue-950  rounded-3xl text-xs flex items-center'><LocationOnIcon /> Dinajpur</button>
                            <p className='font-bold bg-green-500 flex items-center gap-3 text-xs px-2 rounded-3xl text-white'><LocalActivityIcon></LocalActivityIcon>40</p>
                        </div>
                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <div className='flex justify-between items-center px-3'>
                            <button className='  border-white shadow text-blue-950 rounded-full'><MoreVertIcon/></button>
                            <h3 className='text-xl font-bold text-blue-950'>
                                ৳ ৪০০০
                            </h3>
                        </div>

                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <button className='flex items-center justify-center bg-gradient-to-t from-blue-900 to-cyan-800 w-full mt-5 text-white py-2 text-center'>Show More >> </button>
                    </div>
                </div>
                <div className='bg-[#fdecbc]  rounded-sm border-4 shadow-md border-white'>
                    <img className='w-full h-40' src="https://www.anacondastores.com/medias/10-best-fishing-spots-in-brisbane-1.jpg?context=bWFzdGVyfHJvb3R8MTEwNjEwfGltYWdlL2pwZWd8cm9vdC9oODIvaGMxLzE0MDIxMDg5NDYwMjU0LzEwLWJlc3QtZmlzaGluZy1zcG90cy1pbi1icmlzYmFuZS0xLmpwZ3xjZTc5NDdhMzFhNjMyNzhhMmEyZmE1MzI4N2UyMzk4Yjg3ZDc3YTdjN2U1MmRlZjU0YmY0MDM5M2JhZTZjMGQ5" alt="" />
                    <div>
                        <h5 className='text-sm font-normal mt-5 text-blue-950 px-3 flex justify-between items-center flex-wrap'>Lorem ipsum dolor sit ?
                            <button className='bg-blue-950 text-white px-1 rounded-3xl text-xs'>24 jun</button>
                        </h5>
                        <div className='flex justify-between items-center mt-3 px-3'>
                            <button className='text-blue-950  rounded-3xl text-xs flex items-center'><LocationOnIcon /> Dinajpur</button>
                            <p className='font-bold bg-green-500 flex items-center gap-3 text-xs px-2 rounded-3xl text-white'><LocalActivityIcon></LocalActivityIcon>40</p>
                        </div>
                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <div className='flex justify-between items-center px-3'>
                            <button className='  border-white shadow text-blue-950 rounded-full'><MoreVertIcon/></button>
                            <h3 className='text-xl font-bold text-blue-950'>
                                ৳ ৪০০০
                            </h3>
                        </div>

                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <button className='flex items-center justify-center bg-gradient-to-t from-blue-900 to-cyan-800 w-full mt-5 text-white py-2 text-center'>Show More >> </button>
                    </div>
                </div>
                <div className='bg-[#fdecbc]  rounded-sm border-4 shadow-md border-white'>
                    <img className='w-full h-40' src="https://www.newzealand.com/assets/Tourism-NZ/West-Coast/19a605841c/img-1536252784-2712-21275-D9354F11-CAF4-3C1E-D2741229D195C337__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.jpg" alt="" />
                    <div>
                        <h5 className='text-sm font-normal mt-5 text-blue-950 px-3 flex justify-between items-center flex-wrap'>Lorem ipsum dolor sit ?
                            <button className='bg-blue-950 text-white px-1 rounded-3xl text-xs'>24 jun</button>
                        </h5>
                        <div className='flex justify-between items-center mt-3 px-3'>
                            <button className='text-blue-950  rounded-3xl text-xs flex items-center'><LocationOnIcon /> Dinajpur</button>
                            <p className='font-bold bg-green-500 flex items-center gap-3 text-xs px-2 rounded-3xl text-white'><LocalActivityIcon></LocalActivityIcon>40</p>
                        </div>
                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <div className='flex justify-between items-center px-3'>
                            <button className='  border-white shadow text-blue-950 rounded-full'><MoreVertIcon/></button>
                            <h3 className='text-xl font-bold text-blue-950'>
                                ৳ ৪০০০
                            </h3>
                        </div>

                        <div className='border my-3 border-dashed border-blue-950'></div>
                        <button className='flex items-center justify-center bg-gradient-to-t from-blue-900 to-cyan-800 w-full mt-5 text-white py-2 text-center'>Show More >> </button>
                    </div>
                </div>
                
            </section>
        </div>
    );
};

export default Event;