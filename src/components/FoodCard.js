import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import FoodData from '../data/FoodData';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';

const FoodCard = () => {
    const dispatch = useDispatch()

    let [dataFood, setDataFood] = useState()
    useEffect(() => {
        setDataFood(FoodData)
    }, [])

    return (
        <>
            {
                dataFood?.map((value, key) => (
                    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-3' key={key}>
                        <img
                            className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out'
                            alt='pizza-img'
                            src={value.img}
                        />
                        <div className='text-sm flex justify-between'>
                            <h2>{value.name}</h2>
                            <span className='text-green-500'>₹{value.price}</span>
                        </div>
                        <p className='text-sm font-normal'>{value.desc.slice(0, 50)}...</p>
                        <div className='flex justify-between'>
                            <span className='flex justify-center items-center'>
                                <AiFillStar className='mr-1 text-yellow-400' /> {value.rating}
                            </span>
                            <button onClick={() => dispatch(addToCart({
                                img: value.img,
                                name: value.name,
                                price: value.price,
                                desc: value.desc,
                                rating: value.rating,
                                qty: 1,
                                id: value.id
                            }))} className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>
                                Add to card
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default FoodCard