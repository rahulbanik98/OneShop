import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { PacmanLoader } from 'react-spinners'

const Success = () => {
  const [time, setTime] = useState(true);
  const dispatch = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTime(false)
    }, 4000)
    setTimeout(() => {
      dispatch('/')
    }, 8000)
  }, [])



  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        {
          time ? (<PacmanLoader color="#36d7b7" />) :
            (
              <div>
                <h2 className='text-3xl font-semibold mb-4 text-center'>Order Successful!</h2>
                <p>Your order hase been uccessfully placed</p>
              </div>
            )
        }

      </div>
    </>
  )
}

export default Success
