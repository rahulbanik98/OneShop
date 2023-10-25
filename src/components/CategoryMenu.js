import React from 'react'

const CategoryMenu = () => {
  return (
<>
    <div className='ml-6'>
        <h3 className='mt-4 mb-2 text-xl'>Find the best food for you</h3>
        <div className='flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
            <button className='px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#679e76] hover:text-white'>All</button>
            <button className='px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#679e76] hover:text-white'>Lunch</button>
            <button className='px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#679e76] hover:text-white'>Breakfast</button>
            <button className='px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#679e76] hover:text-white'>Dinner</button>
            <button className='px-3 py-2 bg-slate-200 font-bold rounded-lg hover:bg-[#679e76] hover:text-white'>Snacks</button>
        </div>
    </div>
</>
  )
}

export default CategoryMenu