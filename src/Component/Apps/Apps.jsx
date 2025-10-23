import React from 'react';
import useAppsData from '../../Hook/reacthook';
import AppCard from './AppCard';
import { Link } from 'react-router';
import { FadeLoader } from 'react-spinners';

const Apps = () => {

    const { apps, loading } = useAppsData();
    const bodyApps = apps.slice(0, 8)
    console.log(bodyApps);

    return (
        <div>
            <div className='text-center'>
                <h1 className='font-bold text-5xl'>Trending Apps</h1>
                <p className='text-[#627382] mt-4 mb-10'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            {
                loading ? <div className='flex justify-center items-center'><FadeLoader color="#305a8e" /></div> :
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {
                            bodyApps.map((app) => <AppCard app={app}></AppCard>)
                        }
                    </div>
            }
            <div className='text-center mt-10 '>
                <Link to="/apps">
                    <button className="btn btn-primary px-10">Show All</button>
                </Link>
            </div>
        </div>

    );
};

export default Apps;