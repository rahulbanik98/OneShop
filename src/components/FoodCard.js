import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import toast, { Toaster } from 'react-hot-toast';


const FoodCard = () => {
    const categorySliceData = useSelector((state) => state.CategorySlice)
    const searchSlice = useSelector((state) => state.SearchSlice.search)

    const notify = (value) => toast.custom((t) => (
        <div
            className={`${t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={value.img}
                            alt={value.name}
                        />
                    </div>
                    <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">
                            {value.name}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {value.desc.slice(0, 37)}...
                        </p>
                        <p className="mt-1 text-sm text-green-500">
                            Price :- ₹{value.price}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 
                    flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 
                    focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Close
                </button>
            </div>
        </div>
    ))


    const dispatch = useDispatch()

    let [dataFood, setDataFood] = useState()
    useEffect(() => {
        setDataFood(FoodData)
    }, [])

    const addToCartFunction = (value) => {
        dispatch(addToCart({
            img: value.img,
            name: value.name,
            price: value.price,
            desc: value.desc,
            rating: value.rating,
            qty: 1,
            id: value.id
        }))
    }

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {
                dataFood ? dataFood.filter(food => {
                    if (categorySliceData.category === "All") {
                        return food.name.toLowerCase().includes(searchSlice.toLowerCase())
                    } else if (categorySliceData.category === food.category) {
                        return food.name.toLowerCase().includes(searchSlice.toLowerCase())
                    }
                }).map((food, key) => (
                    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3' key={key}>
                        <img
                            className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
                            alt='pizza-img'
                            src={food.img}
                        />
                        <div className='text-sm flex justify-between'>
                            <h2>{food.name}</h2>
                            <span className='text-[#f9bb46]'>₹{food.price}</span>
                        </div>
                        <p className='text-sm font-normal'>{food.desc.slice(0, 50)}...</p>
                        <div className='flex justify-between'>
                            <span className='flex justify-center items-center'>
                                <AiFillStar className='mr-1 text-yellow-400' /> {food.rating}
                            </span>
                            <button onClick={() => {
                                addToCartFunction(food)
                                notify(food)
                            }}
                                className='p-1 text-white bg-[#f9c35c] hover:bg-[#f9bb46] rounded-lg text-sm'>
                                Add to card
                            </button>
                        </div>
                    </div>
                ))
                    : <div className="w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3 items-center">
                        <div className="animate-pulse space-x-4">
                            <div className=" bg-slate-700 w-[170px] h-[130px]"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className='ml-[-10%]'>
                                    <div className="space-y-3 mt-4">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-7">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="h-2 bg-slate-700 rounded col-span-5"></div>
                                            <div className="h-2 bg-slate-700 rounded col-span-5"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-5 mt-7">
                                        <div className="grid grid-cols-3 gap-8">
                                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            <Toaster />
        </>
    )
}

export default FoodCard