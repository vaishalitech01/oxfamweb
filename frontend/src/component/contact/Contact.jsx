import React from 'react'

const Contact = () => {
  return (
    <div>
        <div className='flex justify-center mt-8'>
            <form action="" className='shadow-2xl p-3 rounded w-100 space-y-2.5'>
                <p className='text-center text-2xl font-semibold'>Enter your details</p>
                <input className='border outline-0 rounded-3xl p-2 mt-3 w-full' type="text" required placeholder='Enter your name' /><br/>
                <input className='border outline-0 rounded-3xl p-2 mt-3 w-full' type="email" required placeholder='Enter your email'/><br/>
                <input className='border outline-0 rounded-3xl p-2 mt-3 w-full' type="password" required placeholder='Enter your password'/><br/>
                <input className='border outline-0 rounded-3xl p-2 mt-3 w-full' type="number" required placeholder='Enter your number'/><br/>
                <button className=' rounded-3xl w-full mt-4 p-2 cursor-pointer bg-green-500 text-white font-semibold text-xl'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
