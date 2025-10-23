import React from 'react';
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className='bg-[#FFFFFF] w-70 mx-auto shadow-sm p-4 rounded-xl  hover:scale-105 transition ease-in-out'>
                <img className='h-[216px] w-[216px] p-5' src={image} alt="" />
                <h1 className='font-medium my-2'>{title}</h1>
                <div className='flex justify-between my-2'>
                    <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                        <img className='w-3 h-3' src={downloadIcon} alt="" />
                        <p className='text-[#00D390] font-medium ml-2'>{downloads}</p>
                    </button>
                    <button className='bg-[#F1F5E8] flex items-center p-2 rounded-xs'>
                        <img className='w-3 h-3' src={ratingIcon} alt="" />
                        <p className='text-[#00D390] font-medium ml-2'>{ratingAvg}</p>
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;