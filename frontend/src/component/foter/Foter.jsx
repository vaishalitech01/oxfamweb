import React from 'react'

const Foter = () => {
  return (
    <div className='bg-black text-white p-2 mt-8'>
     <div className='grid sm:grid-cols-2 md:grid-cols-3'>
         <div className='p-2 space-y-2 text-center mt-2'>
          <div className='flex justify-center'>
                        <img className='w-15' src="/logo.png" alt="" />

          </div>
            <p className='mt-3'>Lorem, ipsum dolor.</p>
      </div>
         <div className='p-2 space-y-2 text-center mt-2'>
        <p className='font-semibold text-lg'>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Download</p>
      </div>
         <div className='p-2 space-y-2 text-center mt-2'>
       <p className='font-semibold text-lg'>Address</p>
       <p>Lorem ipsum dolor sit.</p>
       <p>Lorem, ipsum.</p>
       <p><a href="/login">Admin Login</a></p>

      </div>
     </div>
    </div>
  )
}

export default Foter
