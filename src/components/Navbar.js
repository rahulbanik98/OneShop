import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState()
    const [ampm, setAmpm] = useState()


    function getTimeFunctions(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setCurrentTime(date.toUTCString().slice(0, 16))
        setAmpm(strTime)
    }

    useEffect(() => {
        getTimeFunctions(new Date())
    }, [])

    return (
        <>
            <nav className='flex flex-col lg:flex-row justify-between py-3 bg-slate-100'>

                <div className='mx-6'>
                    <h3 className='text-xl font-bold text-gray-400'>{currentTime && ampm ? ampm + " " + currentTime : "Loading..."}</h3>
                    <h1 className='text-2xl font-bold text-gray-600'>One Stop 220</h1>
                </div>
                <div className='mx-6'>
                    <input
                        type='search'
                        name='search'
                        placeholder='Search here'
                        autoComplete='off'
                        className='p-3 border border-gray-400 text-sm outline-none w-full rounded-lg lg:w-[25vw]'
                    />
                </div>
            </nav>
        </>
    )
}

export default Navbar;

