import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Vanue = () => {
    return (
        <div className='max-w-6xl mx-auto p-5'>
            <h5 className='mt-10 text-2xl  font-bold text-blue-950'>Popular Venue</h5>
            <h5 className='text-blue-950'>Our Event organized Event and ticket hare</h5>
            <hr className='bg-blue-800' />


            <section className='grid md:grid-cols-3 grid-cols-1 gap-5  my-20'>
                <div className='bg-[#e9d2a9] shadow-lg border-4 border-white'>
                    <img className='h-60 w-full' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/1e/4a/33/pangthumai-waterfall.jpg?w=700&h=-1&s=1" alt="" />
                    {/* <h5 className='absolute top-2'>Lorem ipsum dolor sit amet consectetur.</h5> */}
                    <p className='my-3 px-3 text-sm text-blue-950'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, soluta. adipisicing elit. Modi, soluta.</p>
                    <div className='border my-3 border-dashed border-blue-950'></div>
                    <div className='mt-5 flex justify-start gap-5 text-blue-950 px-5 py-2 my-3'>
                        <LocationOnIcon className='we-icon-2 p-1 bg-blue-950 text-white rounded-full'/> 
                        <p>Syllet</p>
                    </div>
                </div>
                <div className='bg-[#e9d2a9] shadow-lg border-4 border-white'>
                    <img className='h-60 w-full' src="https://www.coxsbazarcity.com/wp-content/uploads/2019/12/Coxs-Bazar-Exclusive-picture-coxsbazarcity.com-16.jpg" alt="" />
                    {/* <h5 className='absolute top-2'>Lorem ipsum dolor sit amet consectetur.</h5> */}
                    <p className='my-3 px-3 text-sm text-blue-950'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, soluta. adipisicing elit. Modi, soluta.</p>
                    <div className='border my-3 border-dashed border-blue-950'></div>
                    <div className='mt-5 flex justify-start gap-5 text-blue-950 px-5 py-2 my-3'>
                        <LocationOnIcon className='we-icon-2 p-1 bg-blue-950 text-white rounded-full'/> 
                        <p>Cox's Bazar</p>
                    </div>
                </div>
                <div className='bg-[#e9d2a9] shadow-lg border-4 border-white'>
                    <img className='h-60 w-full' src="https://www.tbsnews.net/sites/default/files/styles/amp_metadata_content_image_min_696px_wide/public/images/2021/03/29/rangamati_pic-11_1.jpg" alt="" />
                    {/* <h5 className='absolute top-2'>Lorem ipsum dolor sit amet consectetur.</h5> */}
                    <p className='my-3 px-3 text-sm text-blue-950'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, soluta. adipisicing elit. Modi, soluta.</p>
                    <div className='border my-3 border-dashed border-blue-950'></div>
                    <div className='mt-5 flex justify-start gap-5 text-blue-950 px-5 py-2 my-3'>
                        <LocationOnIcon className='we-icon-2 p-1 bg-blue-950 text-white rounded-full'/> 
                        <p>Rangamati</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vanue;