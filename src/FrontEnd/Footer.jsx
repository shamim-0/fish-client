import React from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
    return (
       <div className='bg-blue-950 '>
         <div className='p-5 text-white grid max-w-6xl mx-auto lg:grid-cols-5 pt-10'>
            <div>
                <h5>Go Fish Pro</h5>
            </div>
            <div>
                <Link className='block mt-3'>Product</Link>
                <Link className='block mt-3'>Featured</Link>
                <Link className='block mt-3'>Integrations</Link>
                <Link className='block mt-3'>Pricing</Link>
                <Link className='block mt-3'>FAQ</Link>
            </div>
            <div>
            <Link className='block mt-3'>Company</Link>
            <Link className='block mt-3'>Privacy</Link>
            <Link className='block mt-3'>Trams of services</Link>
            </div>
            <div>
                <Link className='block mt-3'>Developers</Link>
                <Link className='block mt-3'>Public API</Link>
                <Link className='block mt-3'>Documentation</Link>
                <Link className='block mt-3'>Guides</Link>
            </div>
            <div>
            <Link className='block mt-3'>Social Medea</Link>
            <Link className='block mt-3'>
            <FacebookIcon/>
            <TwitterIcon/>
            <InstagramIcon/>
            </Link>
            </div>
        </div>
        <hr />
        <h5 className='py-5 text-center text-white'>2023 All Right Reserve 2023 Develop By Rainbosoft</h5>
       </div>
    );
};

export default Footer;