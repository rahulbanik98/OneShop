import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQty, incrementQty, removeFromCart } from '../redux/slices/CartSlice'

const ItemCard = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.CartSlice.cartInitialState)
    return (
        <>
            {
                cartItems.length > 0 ? cartItems?.map((value, key) => (
                    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-4' key={key}>
                        <MdDelete
                            onClick={() => dispatch(removeFromCart(value.id))}
                            className='absolute right-7 text-gray-600 cursor-pointer hover:text-red-500' />
                        <img src={value.img}
                            alt="ItemCard"
                            className='w-[50px] h-[50px]'
                        />
                        <div className='leading-5'>
                            <h2 className='font-bold text-gray-800'>{value.name}</h2>
                            <div className='flex justify-between'>
                                <span className='text-green-500 font-bold'>₹{value.price}</span>
                                <div className='flex justify-center items-center gap-2 right-7 absolute'>
                                    <AiOutlineMinus
                                        onClick={() => value.qty > 1 ? dispatch(decrementQty({
                                            img: value.img,
                                            name: value.name,
                                            price: value.price,
                                            desc: value.desc,
                                            rating: value.rating,
                                            qty: 1,
                                            id: value.id
                                        })) : value.qty = 0}
                                        className={` ${value.qty === 1 ? 'hidden' : 'border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'}`} />
                                    <span>{value.qty}</span>
                                    <AiOutlinePlus
                                        onClick={() => dispatch(incrementQty({
                                            img: value.img,
                                            name: value.name,
                                            price: value.price,
                                            desc: value.desc,
                                            rating: value.rating,
                                            qty: 1,
                                            id: value.id
                                        }))}
                                        className='border-2 border-gray-600
                                    text-gray-600 hover:text-white hover:bg-green-500
                                    hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : <h3 className='text-center text-gray-600'>Card is empty</h3>
            }

        </>
    )
}

export default ItemCard



