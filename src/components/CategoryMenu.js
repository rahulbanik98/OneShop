import React, { useEffect, useState } from 'react'
import data from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.CategorySlice)

  const [menu, setMenu] = useState([])

  const categoryes = () => {
    const categoryData = [...new Set(data.map((value) => value.category))];
    setMenu(categoryData);
  }

  useEffect(() => {
    categoryes()
  }, [])

  return (
    <>
      <div className='ml-6'>
        <h3 className='mt-4 mb-2 text-xl'>Find the best food for you</h3>
        <div className='flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
          <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#f9be4f] hover:text-white 
            ${selectedCategory === "All" ? "bg-green-500 text-white" : ""}`}>
            All</button>
          {
            menu?.map((value, key) => (
              <button
                onClick={() => dispatch(setCategory(value))}
                className={`${selectedCategory === value && "bg-[#f9be4f] text-white"} 
                px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#f9be4f] hover:text-white`}
                key={key}>{value}</button>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default CategoryMenu