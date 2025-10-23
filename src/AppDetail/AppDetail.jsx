import React, { useState } from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useAppsData from '../Hook/reacthook';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import errorImg from '../assets/App-Error.png'

const AppDetail = () => {


    const [install, setInstall] = useState(false);

    // const [installedApp, setInstalledApp] = useState([]);

    const { id } = useParams();
    const { apps } = useAppsData();
    const app = apps.find(p => p.id === parseInt(id))
    useEffect(() => {
        if (!app) return;
        const installedApps = JSON.parse(localStorage.getItem("apps")) || [];
        const alreadyInstalled = installedApps.some(p => p.id === app.id);
        if (alreadyInstalled) setInstall(true);
    }, [app]);
    if (!app) {
        return (<div>
            <div className='flex justify-center items-center mt-20'>
                <div className='text-center space-y-6 mb-10 md:mb-15'>
                    <div className='flex items-center justify-center'>
                        <img src={errorImg} alt="" />
                    </div>
                    <h1 className='font-bold text-4xl'>OPPS!! APP NOT FOUND</h1>
                    <p className='text-gray-400 text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to='/' className='text-white rounded-sm font-semibold py-3 px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>)
    }


    const handleAddToStorage = (app) => {

        let oldApps = JSON.parse(localStorage.getItem("apps")) || [];
        let totalApps = [];
        if (oldApps) {
            const duplicate = oldApps.some(p => p.id === app.id)
            setInstall(duplicate)
            if (duplicate) return toast("This App Already Installed")
            totalApps = [...oldApps, app]
        }
        else {
            totalApps.push(app)
        }
        localStorage.setItem("apps", JSON.stringify(totalApps));
    }


    return (
        <div className='max-w-[1440px] mx-auto mb-10 md:mb-20'>

            <div className='flex flex-col md:flex-row p-3 mt-10 md:mt-16 space-y-2'>

                <div className='md:w-1/3'>
                    <img className='w-[400px] md:w-[350px] h-[350px]' src={app.image} alt="" />
                </div>
                <div className='ml-5 space-y-2 md:w-2/3'>
                    <h1 className='font-bold text-4xl'>{app.title}</h1>
                    <p className='text-[#627382] text-xl'>Developed by <span className='text-[#632EE3] font-semibold'>{app.companyName}</span></p>
                    <hr className='my-7' />

                    <div className='flex space-x-15'>
                        <div className='space-y-2'>
                            <img src={downloadIcon} alt="" />
                            <p>Downloads</p>
                            <h1 className='font-extrabold text-4xl'>{app.downloads}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={ratingIcon} alt="" />
                            <p>Average Ratings</p>
                            <h1 className='font-extrabold text-4xl'>{app.ratingAvg}</h1>
                        </div>
                        <div className='space-y-2'>
                            <img src={reviewIcon} alt="" />
                            <p>Total Reviews</p>
                            <h1 className='font-extrabold text-4xl'>{app.reviews}</h1>
                        </div>
                    </div>

                    <button onClick={() => handleAddToStorage(app)} className='py-3 px-6 bg-[#00D390] text-white font-bold rounded-xl text-xl mt-8'>
                        {
                            install ? "Installed" : `Install Now(${app.size}MB)`
                        }
                    </button>
                </div>
            </div>

            {/* graph part */}
            <div>
                <hr className='my-12' />
            </div>

            <div className='mx-5'>
                <h1 className='text-2xl font-semibold'>Ratings</h1>
                <div className='w-full h-[300px] md:h-[400px]'>
                    <ResponsiveContainer width="100%" height="100%" >
                        <BarChart data={[...app.ratings].reverse()} layout='vertical' >
                            <XAxis type='number'></XAxis>
                            <YAxis type='category' dataKey={'name'}></YAxis>
                            <Bar dataKey={'count'} fill="#FF8811" barSize={30}></Bar>
                        </BarChart>
                    </ResponsiveContainer>

                </div>
            </div>
            <hr className='my-12' />
            <div className='space-y-2 mx-3'>
                <h2 className='font-semibold text-2xl'>Description</h2>
                <p className='text-[#627382] text-xl'>{app.description}</p>
            </div>
        </div>
    );
};

export default AppDetail;