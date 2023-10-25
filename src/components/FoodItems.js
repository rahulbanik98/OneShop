import React from 'react'
import FoodCard from './FoodCard'

const FoodItems = () => {
  return (
    <>
      <div className='flex flex-wrap gap-8 justify-center lg:justify-start pl-6 my-10 '>
        <FoodCard />
      </div>
    </>
  )
}

export default FoodItems