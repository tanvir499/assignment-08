import React, { useState } from 'react';
import useAppsData from '../../Hook/reacthook';
import SearchIcon from '../../assets/Search-icon.png'
import AppCard from '../Apps/AppCard';
import { FadeLoader } from 'react-spinners';

const AllApps = () => {
    const { apps, loading } = useAppsData();

    const [search, setSearch] = useState('');
    const word = search.trim().toLowerCase();
    const appSearched = word ? apps.filter(app => app.title.toLowerCase().includes(word)) : apps;

    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className='text-center mt-10 md:mt-15 space-y-4'>
                <h1 className='font-bold text-5xl'>Our All Applications</h1>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center my-3 '>
                <p className='text-2xl font-semibold'>({appSearched.length}) Apps Found</p>
                <label className='input'>
                    <img src={SearchIcon} alt="" />
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="search" placeholder='Search Apps Here' />
                </label>
            </div>
            {
                loading ? <div className='flex justify-center items-center'><FadeLoader color="#305a8e" /> </div>:
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20'>
                        {
                            appSearched.map(app => <AppCard app={app}></AppCard>)
                        }
                    </div>
             }
                </div>
    );
};

export default AllApps;