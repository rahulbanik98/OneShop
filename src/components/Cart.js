import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import ItemCard from './ItemCard'
import { HiShoppingCart } from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const cartItem = useSelector((state) => state.CartSlice.cartInitialState)

    const totalQty = cartItem.reduce((totalQty, item) => totalQty + item.qty, 0)
    const totalPrise = cartItem.reduce((total, item) => total + item.qty * item.price, 0)

    const [activeCart, setActiveCart] = useState(false)

    const navigate = useNavigate()
    const checkoutFunction = () => {
        navigate('/success')
    }
    return (
        <>
            <div className={`fixed right-0 top-0 w-full bg-white lg:w-[27vw] h-full p-5 
            ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
                <div className='flex justify-between items-center my-3'>
                    <span>My Order</span>
                    <IoMdClose onClick={() => setActiveCart(!activeCart)}
                        className='cursor-pointer border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md 
                    hover:text-red-300 hover:border-yellow-300 '/>
                </div>

                <ItemCard />

                <div className='absolute bottom-5'>
                    <h3>Items : {totalQty}</h3>
                    <h3>Total Amount : {totalPrise}</h3>
                    <hr className='lg:w-[24vw] w-[90vw] mb-4 mt-2' />
                    <button
                        onClick={checkoutFunction}
                        className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[24vw]'
                    >Checkout</button>
                </div>
            </div>
            <HiShoppingCart
                onClick={() => setActiveCart(!activeCart)}
                className={`cursor-pointer rounded-full bg-white shadow-md text-5xl p-3 
                fixed bottom-4 right-4 ${totalQty > 0 && 'animate-bounce delay-500 transition-all bg-slate-900 text-yellow-600'}`}
            />
        </>
    )
}

export default Cart