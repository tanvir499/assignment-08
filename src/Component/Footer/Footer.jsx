
import React from 'react';
import logoImg from '../../assets/logo.png'
import { Link } from 'react-router';
import XIcon from '../../assets/X-icon.png'
import linkdinIcon from '../../assets/linkdin-icon.png'
import facebookIcon from '../../assets/facebook-icon.png'
const Footer = () => {
    return (
        <div className='mt-20'>
            <footer className="footer sm:footer-horizontal bg-[#000000] text-neutral-content p-10">
                <div className='flex items-center '>
                    <img className='w-[40px] h-[40px] mr-2' src={logoImg} alt="" />
                    <Link to='/' className="text-2xl text-white"><span className='font-bold'>HERO.IO</span></Link>
                </div>
                
                <nav className='md:ml-50 lg:ml-100'>
                    <h6 className=" font-semibold text-xl text-white">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                      <a href="https://x.com/i/flow/login" target='_blank'> <img src={XIcon} alt="" /></a>
                      <a href="https://www.linkedin.com/" target='_blank'> <img src={linkdinIcon} alt="" /></a>
                      <a href="https://www.facebook.com/" target='_blank'> <img src={facebookIcon} alt="" /></a>
                    </div>
                </nav>
                
            </footer>
            <div className='bg-[#000000] text-center'>
                  <hr className='border-1 border-white mx-4' />
                     <p className='text-white py-4'>Copyright © 2025 - All right reserved</p>
                </div>
        </div>
    );
};

export default Footer;
