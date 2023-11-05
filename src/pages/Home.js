import React from 'react'
import Navbar from '../components/Navbar'
import CategoryMenu from '../components/CategoryMenu'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <Cart />
      <p className='text-sm text-gray-600 text-center'>All Rights Reserved. Copyright © Rahul Banik. || V.2.1.0</p>
    </>
  )
}

export default Home